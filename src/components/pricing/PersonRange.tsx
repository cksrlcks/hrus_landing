import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";

type PersonRangeProps = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
};

export default function PersonRange({
  value,
  onChange,
  className,
  min = 0,
  max = 100,
  step = 10,
  unit = "명",
}: PersonRangeProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <Slider
        value={[value]}
        onValueChange={([value]) => onChange(value)}
        min={min}
        max={max}
        step={step}
      />
      <div className="flex items-center justify-between text-sm text-[#666]">
        <span>
          최소 {min}
          {unit}
        </span>
        <span>{max}+</span>
      </div>
    </div>
  );
}
