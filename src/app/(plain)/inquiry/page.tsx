"use client";

import InquiryForm from "@/components/inquiry/InquiryForm";
import {
  FormBody,
  FormDescription,
  FormHeader,
  FormLayout,
  FormTitle,
} from "@/components/ui/FormLayout";
import GradientText from "@/components/ui/GradientText";

export default function page() {
  return (
    <FormLayout>
      <FormHeader>
        <FormTitle>
          <GradientText>HR US 솔루션</GradientText>
          <br /> 1:1 문의
        </FormTitle>
        <FormDescription>
          작성해주신 이메일 주소로 문의내용에 답변해드립니다.
        </FormDescription>
      </FormHeader>
      <FormBody>
        <InquiryForm />
      </FormBody>
    </FormLayout>
  );
}
