"use client";

import { ButtonHTMLAttributes, useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type PersonCounterProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export default function PersonCounter({
  value,
  onChange,
  min = 0,
  max = 100,
}: PersonCounterProps) {
  const [showInput, setShowInput] = useState(false);
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDoubleClick = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleInputBlur = () => {
    const inputValue = parseInt(inputRef.current?.value || "", 10);
    if (isNaN(inputValue)) return;

    if (inputValue < min) {
      onChange(min);
    } else if (inputValue > max) {
      onChange(max);
    } else {
      onChange(inputValue);
    }

    setShowInput(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
      return;
    }

    if (e.key === "Escape") {
      setShowInput(false);
      return;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <CounterButton disabled={value <= min} onClick={handleDecrement}>
        <Minus size={14} />
        <span className="sr-only">내리기</span>
      </CounterButton>
      {!showInput ? (
        <span
          className="w-[3.5em] text-center text-2xl font-bold"
          onDoubleClick={handleDoubleClick}
        >
          {value}명
        </span>
      ) : (
        <span className="w-[3.5em] text-center text-2xl font-bold">
          <input
            ref={inputRef}
            type="text"
            className="h-full w-full text-center"
            defaultValue={value}
            onKeyDown={handleKeyDown}
            onBlur={() => handleInputBlur()}
          />
        </span>
      )}
      <CounterButton disabled={value >= max} onClick={handleIncrement}>
        <Plus size={14} />
        <span className="sr-only">올리기</span>
      </CounterButton>
    </div>
  );
}

function CounterButton({
  children,
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "ring-ring/30 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[50%] border-2 border-[#ccc] shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all hover:border-[#aaa] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:ring-4 focus:border-[#aaa] focus-visible:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
