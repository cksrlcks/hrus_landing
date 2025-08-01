"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Badge from "../ui/Badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Dropzone = dynamic(() => import("@/components/ui/Dropzone"), {
  ssr: false,
  loading: () => (
    <div className="flex h-24 items-center justify-center text-center text-sm text-[#888]">
      파일업로드 모듈을 불러오는 중입니다.
    </div>
  ),
});

const schema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  email: z.email({ message: "유효한 이메일을 입력해주세요." }),
  type: z.string().min(1, { message: "문의 유형을 선택해주세요." }),
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  content: z.string().min(1, { message: "내용을 입력해주세요." }),
  files: z
    .array(
      z.file().max(5 * 1024 * 1024, { message: "5MB를 초과 할 수 없습니다." }),
    )
    .optional(),
});

type SchemaType = z.infer<typeof schema>;

export default function InquiryForm() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      type: "0010",
      title: "",
      content: "",
      files: [],
    },
  });
  console.log(form.formState.errors);
  const [agree, setAgree] = useState(false);

  const handleSubmit = form.handleSubmit((data) => {
    console.log("Form Data:", data);
    alert("문의가 접수되었습니다. 감사합니다!");
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>성명</FormLabel>
                    <FormControl>
                      <Input placeholder="성명을 입력해주세요" {...field} />
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
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="이메일을 입력해주세요"
                        type="email"
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
        <FormSection>
          <FormSectionTitle>
            문의 내용 <Badge>필수</Badge>
          </FormSectionTitle>
          <FormContent>
            <FormRow>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>문의 유형</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="문의유형을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0010">이용문의</SelectItem>
                          <SelectItem value="0020">구독문의</SelectItem>
                          <SelectItem value="0030">결제/환불 문의</SelectItem>
                          <SelectItem value="0040">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="hidden lg:block" />
            </FormRow>
            <FormRow>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>제목</FormLabel>
                    <FormControl>
                      <Input placeholder="제목을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormRow>
            <FormRow>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>문의내용</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="문의내용을 입력해주세요"
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
                name="files"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>
                      첨부파일 <Badge variant="secondary">선택</Badge>
                    </FormLabel>
                    <FormControl>
                      <Dropzone onChange={onChange} value={value} />
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
          <div className="flex gap-3">
            <Checkbox
              id="terms"
              className="shrink-0"
              checked={agree}
              onCheckedChange={() => setAgree((prev) => !prev)}
            />
            <Label
              htmlFor="terms"
              className="cursor-pointer text-sm leading-snug font-medium lg:text-base"
            >
              <span>
                개인정보 수집
                <em className="text-[#888] not-italic">
                  (담당자명, 이메일, 전화번호)
                </em>
                및 이용 동의 약관에 동의합니다.
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
