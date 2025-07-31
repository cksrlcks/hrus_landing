import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { RefreshCcw } from "lucide-react";
import CoreImage from "@/assets/images/icon-core.svg";
import GroupIcon from "@/assets/images/icon-group.svg";
import PlusIcon from "@/assets/images/icon-plus.svg";
import { formatPrice } from "@/lib/utils";
import { usePricingQuery } from "@/queries/pricing.queries";
import CheckIcon from "../ui/CheckIcon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { AddonBadge, CoreBadge } from "./PlanItem";
import { DEFAULT_MIN_PERSON_COUNT } from "./Pricing";
import { Section, SectionHeader, SectionTitle } from "./Section";

type SummaryProps = {
  onSubmit: () => void;
};

export default function Summary({ onSubmit }: SummaryProps) {
  const { watch, reset } = useFormContext();
  const { data } = usePricingQuery();
  const formValues = watch();

  const description = [
    data?.core.title,
    ...(data?.addons
      .filter((addon) => formValues.addons[addon.id])
      .map((addon) => `(${addon.title})`) || []),
  ].join(" + ");
  const finalDescription = `[${description}] X 구성원수 (${formValues.personCount}명)`;

  const corePrice = (data?.core.price || 0) * formValues.personCount;
  const addonsPrice =
    data?.addons
      .filter((addon) => formValues.addons[addon.id])
      .reduce(
        (total, addon) => total + addon.price * formValues.personCount,
        0,
      ) || 0;

  const totalPrice = corePrice + addonsPrice;
  const defaultPersonCount = data?.minPersonCount || DEFAULT_MIN_PERSON_COUNT;
  const addedPersonCount = formValues.personCount - defaultPersonCount;
  const personDetail = `${formValues.personCount}명 (기본 ${defaultPersonCount}명${addedPersonCount > 0 ? ` + ${addedPersonCount}명 추가` : ""})`;
  const hasAddons = data?.addons.some((addon) => formValues.addons[addon.id]);

  return (
    <Section className="max-h-[calc(100vh-120px)] overflow-y-auto">
      <SectionHeader className="mb-5">
        <SectionTitle>
          <CheckIcon />
          최종 구독 요금
        </SectionTitle>
        <Button
          size="icon"
          variant="ghost"
          type="button"
          onClick={() => reset()}
          title="초기화"
        >
          <RefreshCcw />
          <span className="sr-only">초기화</span>
        </Button>
      </SectionHeader>

      <SummaryContainer>
        <SummaryHeader>
          <SummaryTitle>기본 옵션</SummaryTitle>
        </SummaryHeader>

        {/* 기본옵션 구성원수 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-semibold">
            <Image src={GroupIcon} alt="구성원 수" />
            구성원 수
          </div>
          <span className="text-xl font-semibold">
            {formValues.personCount}명
          </span>
        </div>
        <div className="text-right text-sm text-gray-500">{personDetail}</div>

        <Separator className="my-4" />

        {/* 선택옵션 */}
        <>
          <SummaryTitle>선택 옵션</SummaryTitle>
          <ul className="space-y-1.5 pt-4">
            <li className="flex items-center justify-between gap-2.5">
              <Image src={CoreImage} alt="hrus core" className="h-3 w-auto" />
              <CoreBadge mini />
            </li>
            {data?.addons.map((addon) => {
              if (!formValues.addons[addon.id]) return null;
              return (
                <li
                  key={addon.id}
                  className="flex items-center justify-between gap-2.5"
                >
                  <div className="flex items-center gap-3 font-semibold">
                    <Image src={PlusIcon} alt="plus" />
                    {addon.title}
                  </div>
                  <AddonBadge mini />
                </li>
              );
            })}
          </ul>
        </>

        <Separator className="my-4" />

        {/* 가격 정리 */}
        <ul className="mb-6">
          <li className="flex items-center justify-between gap-2.5">
            <span className="font-sm text-gray-500">기본 옵션</span>
            <span className="font-semibold tracking-tighter">
              {formatPrice(corePrice)} 원
            </span>
          </li>
          {hasAddons && (
            <li className="flex items-center justify-between gap-2.5">
              <span className="font-sm text-gray-500">부가 옵션</span>
              <span className="flex items-center gap-2 font-semibold tracking-tighter">
                <Image src={PlusIcon} alt="plus" /> {formatPrice(addonsPrice)}{" "}
                원
              </span>
            </li>
          )}
        </ul>

        {/* 최종금액 */}
        <div>
          <div className="mb-4 flex items-baseline justify-between gap-2.5">
            <span className="font-semibold">최종구독료</span>
            <span className="text-[32px] font-bold tracking-tighter">
              {formatPrice(totalPrice)} 원
            </span>
          </div>
          <div className="text-right text-[13px] text-gray-500">
            {finalDescription}
          </div>
        </div>
      </SummaryContainer>

      {/* 구독하기 버튼 */}
      <div className="sticky bottom-0">
        <Button type="button" size="lg" className="w-full" onClick={onSubmit}>
          구독하기
        </Button>
      </div>
    </Section>
  );
}

function SummaryContainer({ children }: PropsWithChildren) {
  return (
    <div className="mb-4 rounded-2xl border-2 border-[#eee] p-6">
      {children}
    </div>
  );
}

function SummaryHeader({ children }: PropsWithChildren) {
  return (
    <header className="mb-4 flex items-center justify-between">
      {children}
    </header>
  );
}
function SummaryTitle({ children }: PropsWithChildren) {
  return <h3 className="font-semibold">{children}</h3>;
}
