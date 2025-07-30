import Image from "next/image";
import CoreWhiteImage from "@/assets/images/core-white.svg";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/Accordion";
import CheckIcon from "../ui/CheckIcon";

const PRICE_DATA = [
  {
    id: "core",
    label: "HRUS CORE",
    price: "6000",
    required: true,
    content: [
      {
        label: "조직관리",
        features: ["조직/구성원 정보", "발령", "자산", "구매/지출"],
      },
      {
        label: "근태관리",
        features: ["출/퇴근", "유연근무/초과근무", "출장/외근"],
      },
      {
        label: "HR 대시보드",
        features: ["일정"],
      },
    ],
  },
  {
    id: "recruit",
    label: "인재채용",
    price: "500",
    content: [],
  },
  {
    id: "goal",
    label: "목표관리",
    price: "500",
    content: [],
  },
  {
    id: "epay",
    label: "전자결재",
    price: "500",
    content: [],
  },
  {
    id: "salary",
    label: "임금설계",
    price: "500",
    content: [],
  },
];

export default function PricingTable() {
  return (
    <div className="relative">
      <ul>
        {PRICE_DATA.map((item) => (
          <li key={item.id}>
            <Accordion defaultOpen={item.id === "core"} disabled={true}>
              <AccordionTrigger>
                <div
                  className={cn(
                    "group flex h-15 w-full cursor-pointer rounded-lg px-[2px] py-[2px]",
                    item.id === "core" &&
                      "bg-gradient-to-r from-[#5766FF] to-[#C945C7]",
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-2 rounded-md bg-[#1D1E2A] px-[30px] group-data-[opened=true]:bg-[#14172F]">
                    <div>
                      {item.id === "core" ? (
                        <Image
                          src={CoreWhiteImage}
                          alt="HRUS CORE"
                          className="h-3 w-auto md:h-auto"
                        />
                      ) : (
                        <span className="font-semibold text-white">
                          {item.label}
                        </span>
                      )}
                    </div>
                    <div className="flex h-4 items-center gap-2">
                      <div className="flex items-center gap-4">
                        {item.required && (
                          <span className="inline-flex h-7 items-center rounded-full bg-gradient-to-tr from-[#5766FF] to-[#9557FF] px-3 text-[13px] font-semibold text-white">
                            필수
                          </span>
                        )}
                        <span className="flex items-center gap-[5px]">
                          <em className="text-[13px] not-italic opacity-45">
                            인당/월
                          </em>
                          <span className="font-bold">
                            {Number(item.price).toLocaleString()}원
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-[6px] mb-4 rounded-lg bg-[#14172F] px-8 py-10">
                  <div className="flex flex-col gap-8 md:gap-2">
                    {item.content.map((contentItem) => (
                      <div
                        key={contentItem.label}
                        className="flex flex-col items-start gap-4 md:flex-row"
                      >
                        <div className="w-[150px] text-base font-semibold text-white">
                          <div className="flex items-center gap-3">
                            <CheckIcon className="-mt-[1px]" />
                            <span className="font-semibold">
                              {contentItem.label}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <ul className="flex flex-wrap gap-2 opacity-60">
                            {contentItem.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </Accordion>
          </li>
        ))}
      </ul>
      <div className="absolute right-0 bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#0F1017] to-transparent" />
    </div>
  );
}
