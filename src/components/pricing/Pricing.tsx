"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { usePricingQuery } from "@/queries/pricing.queries";
import Inner from "../layout/Inner";
import Spinner from "../ui/Spinner";
import { Button } from "../ui/button";
import PersonCounter from "./PersonCounter";
import PersonInfo from "./PersonInfo";
import PersonRange from "./PersonRange";
import PlanItem from "./PlanItem";
import {
  Section,
  SectionContent,
  SectionContentFrame,
  SectionHeader,
  SectionTitle,
} from "./Section";
import Summary from "./Summary";

export const DEFAULT_MAX_PERSON_COUNT = 100;
export const DEFAULT_MIN_PERSON_COUNT = 5;

export default function Pricing() {
  const { data, isPending, error, refetch } = usePricingQuery();
  const schema = z.object({
    personCount: z
      .number()
      .min(data?.minPersonCount || DEFAULT_MIN_PERSON_COUNT)
      .max(data?.maxPersonCount || DEFAULT_MAX_PERSON_COUNT),
    addons: z.record(z.string(), z.boolean()),
  });

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      personCount: DEFAULT_MIN_PERSON_COUNT,
      addons: {},
    },
  });

  const { control, reset, watch, handleSubmit } = methods;
  const formValues = watch();

  useEffect(() => {
    if (!data) return;

    reset({
      personCount: data.minPersonCount,
      addons: data.addons.reduce(
        (acc, addon) => {
          acc[addon.id] = false;
          return acc;
        },
        {} as Record<string, boolean>,
      ),
    });
  }, [data, reset]);

  const onSubmit = handleSubmit((formData) => {
    alert(
      `선택하신 옵션으로 구독페이지로 이동합니다.!\n
      구성원 수: ${formData.personCount}\n
      선택한 부가기능: ${data?.addons
        .filter((addon) => formValues.addons[addon.id])
        .map((addon) => addon.title)
        .join(", ")}`,
    );
  });

  if (error) {
    return (
      <Inner>
        <div className="flex flex-col items-center gap-4 py-50 text-center text-gray-500">
          구독요금 정보를 받아오는 중 오류가 발생했습니다
          <Button variant="outline" size="lg" onClick={() => refetch()}>
            재시도
          </Button>
        </div>
      </Inner>
    );
  }

  if (isPending) {
    return (
      <Inner>
        <div className="flex flex-col items-center gap-6 py-50 text-center text-gray-500">
          <Spinner />
          구독요금 정보를 받아오는 중입니다.
        </div>
      </Inner>
    );
  }

  return (
    <Inner>
      <FormProvider {...methods}>
        <div className="mb-40 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-0">
          <div className="flex-1 space-y-15 border-[#eee] lg:border-r-2 lg:pr-10">
            <Section>
              <SectionHeader>
                <SectionTitle>구성원 수</SectionTitle>
                <Controller
                  control={control}
                  name="personCount"
                  render={({ field }) => (
                    <PersonCounter
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                      min={data?.minPersonCount || DEFAULT_MIN_PERSON_COUNT}
                      max={data?.maxPersonCount || DEFAULT_MAX_PERSON_COUNT}
                    />
                  )}
                />
              </SectionHeader>
              <SectionContent>
                <Controller
                  control={control}
                  name="personCount"
                  render={({ field }) => (
                    <PersonRange
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                      min={data?.minPersonCount || DEFAULT_MIN_PERSON_COUNT}
                      max={data?.maxPersonCount || DEFAULT_MAX_PERSON_COUNT}
                    />
                  )}
                />
                <PersonInfo />
              </SectionContent>
            </Section>

            <Section>
              <SectionHeader>
                <SectionTitle>필수 옵션</SectionTitle>
              </SectionHeader>
              <SectionContent>
                <SectionContentFrame>
                  <PlanItem data={data?.core} value={true} />
                </SectionContentFrame>
              </SectionContent>
            </Section>

            <Section>
              <SectionHeader>
                <SectionTitle>부가기능</SectionTitle>
              </SectionHeader>
              <SectionContent>
                <SectionContentFrame>
                  {data?.addons.map((item) => (
                    <Controller
                      key={item.id}
                      control={control}
                      name={`addons.${item.id}`}
                      render={({ field }) => (
                        <PlanItem
                          data={item}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  ))}
                </SectionContentFrame>
              </SectionContent>
            </Section>
          </div>
          <div className="lg:w-100 lg:pl-10">
            <div className="lg:sticky lg:top-[100px] lg:overflow-y-auto">
              <Summary onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </FormProvider>
    </Inner>
  );
}
