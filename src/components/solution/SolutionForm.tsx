"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormContent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRow,
  FormSection,
  FormSectionTitle,
} from "@/components/ui/Form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Badge from "../ui/Badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const schema = z.object({
  company: z.string().min(1, { message: "회사명을 입력해주세요." }),
  personCount: z.string().min(1, { message: "인원수를 입력해주세요." }),
  name: z.string().min(1, { message: "담당자명을 입력해주세요." }),
  part: z.string().min(1, { message: "부서를 입력해주세요." }),
  position: z.string().min(1, { message: "직책을 입력해주세요." }),
  email: z.email({ message: "유효한 이메일을 입력해주세요." }),
  phone: z
    .string()
    .min(1, { message: "휴대전화번호를 입력해주세요." })
    .regex(/^\d{3}-\d{4}-\d{4}$/, {
      message: "전화번호는 010-0000-0000 형식이어야 합니다.",
    }),
  content: z.string().min(1, { message: "문의사항을 적어주세요." }),
});

type SchemaType = z.infer<typeof schema>;

export default function SolutionForm() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      company: "",
      personCount: "",
      name: "",
      part: "",
      position: "",
      email: "",
      phone: "",
      content: "",
    },
  });
  console.log(form.formState.errors);
  const [agree, setAgree] = useState(false);

  const handleSubmit = form.handleSubmit((data) => {
    console.log("Form Data:", data);
    alert("최대한 빠른 시일 내에 답변드리겠습니다.");
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-10">
        <FormSection>
          <FormSectionTitle>
            기본 입력 사항 <Badge>필수</Badge>
          </FormSectionTitle>
          <FormContent>
            <FormRow>
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>회사명</FormLabel>
                    <FormControl>
                      <Input placeholder="회사명을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="personCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>직원 수</FormLabel>
                    <FormControl>
                      <Input placeholder="직원 수를 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormRow>
            <FormRow>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>담당자명</FormLabel>
                    <FormControl>
                      <Input placeholder="담당자명을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="part"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>부서</FormLabel>
                    <FormControl>
                      <Input placeholder="부서를 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormRow>
            <FormRow>
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>직책</FormLabel>
                    <FormControl>
                      <Input placeholder="직책을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>회사 이메일</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="회사 이메일을 입력해주세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormRow>
            <FormRow>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>휴대전화번호</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="휴대전화번호를 입력해주세요"
                        {...field}
                        value={field.value}
                        onBlur={field.onBlur}
                        onChange={(e) => {
                          const raw = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 11);
                          const formatted = raw.replace(
                            /(\d{3})(\d{4})(\d{0,4})/,
                            (_, a, b, c) =>
                              c ? `${a}-${b}-${c}` : `${a}-${b}`,
                          );
                          field.onChange(formatted);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="hidden lg:block" />
            </FormRow>
          </FormContent>
        </FormSection>
        <FormSection>
          <FormSectionTitle>궁금하신 점을 추가로 남겨주세요</FormSectionTitle>
          <FormContent>
            <FormRow>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="궁금하신 점을 입력해주세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormRow>
          </FormContent>
        </FormSection>
        <Separator className="mb-10" />
        <FormSection>
          <div className="flex items-center gap-3">
            <Checkbox
              id="terms"
              checked={agree}
              onCheckedChange={() => setAgree((prev) => !prev)}
            />
            <Label
              htmlFor="terms"
              className="cursor-pointer text-sm font-medium lg:text-base"
            >
              <span>
                개인정보 수집
                <em className="text-[#888] not-italic">
                  (담당자명, 이메일, 전화번호)
                </em>
                및 활용{" "}
                <em className="text-[#888] not-italic">
                  (소개서 제공 및 상담)
                </em>
                에 동의합니다.
              </span>
            </Label>
          </div>
        </FormSection>
        <div className="flex items-center justify-center">
          <Button type="submit" disabled={!agree} size="lg">
            제출하기
          </Button>
        </div>
      </form>
    </Form>
  );
}
