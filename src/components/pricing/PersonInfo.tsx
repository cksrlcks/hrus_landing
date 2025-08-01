import Link from "next/link";
import AlertIcon from "../ui/AlertIcon";

export default function PersonInfo() {
  return (
    <div className="mt-4 flex justify-end">
      <div className="flex items-start gap-2 text-sm/[18px] tracking-tight text-gray-600">
        <AlertIcon className="shrink-0 translate-y-[1px]" />
        <span>
          100인 이상은{" "}
          <Link href="/inquiry" className="text-black underline">
            도입문의
          </Link>{" "}
          를 주시면 최적의 요금을 설계해드립니다.
        </span>
      </div>
    </div>
  );
}
