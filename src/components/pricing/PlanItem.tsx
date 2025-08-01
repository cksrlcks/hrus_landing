import React, { PropsWithChildren } from "react";
import Image from "next/image";
import CoreImage from "@/assets/images/icon-core.svg";
import { cn, formatPrice } from "@/lib/utils";
import CheckIcon from "../ui/CheckIcon";
import { Separator } from "../ui/separator";
import { PlanItem as PlanItemType } from "./type";

type SubscribeItemProps = {
  data?: PlanItemType;
  value?: boolean;
  onChange?: (value: boolean) => void;
};
export default function PlanItem({
  data,
  value = false,
  onChange,
}: SubscribeItemProps) {
  const { title, description, features, type } = data || {};

  return (
    <div
      className={cn(
        "relative rounded-2xl border-2 border-transparent bg-white p-6 shadow-[0px_4px_15px_rgba(0,0,0,0.05)] md:p-8 lg:p-10 lg:pt-8 lg:pb-6",
        type === "core" && "has-[input:checked]:border-primary",
        type === "addon" && "has-[input:checked]:border-[#F5784B]",
      )}
    >
      <label
        className={cn(
          "absolute top-4 right-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full md:h-[38px] md:w-[38px]",
          type === "core" &&
            value &&
            "bg-gradient-to-r from-[#5766FF] to-[#4526F7]",
          type === "addon" &&
            value &&
            "bg-gradient-to-tr from-[#FE4A46] to-[#F5784B]",
        )}
        data-checked={value}
      >
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={type === "core"}
          className="sr-only"
        />
        {value ? (
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_227_103)">
              <path
                d="M26.5999 14.25L16.1499 24.7L11.3999 19.95"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_227_103">
                <rect
                  width="22.8"
                  height="22.8"
                  fill="white"
                  transform="translate(9.5 7.59998)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#F1F3F5" />
            <rect x="14" y="19.25" width="12" height="1.5" fill="#3D4143" />
            <rect
              x="20.75"
              y="14"
              width="12"
              height="1.5"
              transform="rotate(90 20.75 14)"
              fill="#3D4143"
            />
          </svg>
        )}
      </label>
      <header className="mb-7 lg:pr-25">
        <h2 className="mb-1 text-lg font-semibold">
          {type === "core" ? (
            <div className="mt-1 mb-3">
              <Image src={CoreImage} alt="hrus core" />
              <div className="sr-only">HRUS Core</div>
            </div>
          ) : (
            title
          )}
        </h2>
        <div className="text-[15px] text-gray-500">{description}</div>
      </header>
      <ul className="flex flex-wrap gap-x-8 gap-y-2">
        {features?.map((feature, index) => (
          <li key={index} className="flex gap-2.5">
            <span
              className={cn(
                "flex h-5.5 items-center",
                !value && "opacity-30 grayscale",
              )}
            >
              <CheckIcon color={type === "core" ? "#5766FF" : "#F5784B"} />
            </span>
            <span className="text-sm font-medium text-[#555]">{feature}</span>
          </li>
        ))}
      </ul>
      <Separator className="my-5 opacity-40" />
      <footer className="flex items-center justify-between">
        <div className={cn(!value && "opacity-30 grayscale")}>
          {type === "core" ? <CoreBadge /> : <AddonBadge />}
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-xs font-semibold">인당/월</span>
          <span className="text-2xl font-bold tracking-tighter">
            {formatPrice(data?.price || "-")} 원
          </span>
        </div>
      </footer>
    </div>
  );
}

type TypeBadgeProps = PropsWithChildren<{ className?: string }>;

export function TypeBadge({ children, className }: TypeBadgeProps) {
  return (
    <span
      className={cn(
        "flex h-7 items-center gap-1.5 rounded-full bg-black px-[11px] text-[13px] leading-7 font-black text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function CoreBadge({ mini = false }: { mini?: boolean }) {
  return (
    <TypeBadge
      className={cn(
        "bg-gradient-to-r from-[#5766FF] to-[#4526F7] text-shadow-[0px_4px_4px_rgba(0,0,0,0.1)]",
        mini && "origin-right scale-80 font-semibold",
      )}
    >
      CORE
    </TypeBadge>
  );
}

export function AddonBadge({ mini = false }: { mini?: boolean }) {
  return (
    <TypeBadge
      className={cn(
        "bg-gradient-to-tr from-[#FE4A46] to-[#F5784B]",
        mini && "origin-right scale-80 font-semibold",
      )}
    >
      {!mini ? (
        <svg
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-[2px]"
        >
          <path
            d="M4.53617 0.323368C5.12279 -0.36257 6.13473 0.116416 6.13481 1.0802V4.922H8.06449C8.8989 4.92242 9.31417 6.0895 8.72074 6.76673L6.3682 9.4513L4.46391 11.6769C3.8773 12.3628 2.86537 11.8838 2.86527 10.92V7.07825H0.935587C0.100959 7.07807 -0.314294 5.9108 0.279337 5.23352L2.63188 2.54895L4.53617 0.323368Z"
            fill="white"
          />
        </svg>
      ) : (
        ""
      )}
      {mini ? "ADDON" : "ADD-ON"}
    </TypeBadge>
  );
}
