"use client";

import SolutionForm from "@/components/solution/SolutionForm";
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
          <GradientText> HR US 솔루션</GradientText>에 대해
          <br /> 궁금하신가요?
        </FormTitle>
        <FormDescription>
          HR US가 제공하는 기능에 대해 더 자세히 알아보고자 하신다면, 아래
          정보를 입력해 주세요.
        </FormDescription>
      </FormHeader>
      <FormBody>
        <SolutionForm />
      </FormBody>
    </FormLayout>
  );
}
