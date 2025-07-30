"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type TabContextProps = {
  indicatorStyle: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function useTabContext() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error(
      "provider 내에서 useTabsWithIndicatorContext를 사용해야 합니다.",
    );
  }
  return context;
}

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const [value, setValue] = useState<string | undefined>(
    props.defaultValue as string,
  );
  const [indicatorStyle, setIndicatorStyle] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  const handleTabCheck = useCallback(() => {
    const tab = document.querySelector(`[data-state="active"]`) as HTMLElement;
    if (tab) {
      const { height, width } = tab.getBoundingClientRect();
      const x = tab.offsetLeft;
      const y = tab.offsetTop;
      setIndicatorStyle({ x, y, height, width });
    }
  }, []);

  useEffect(() => {
    handleTabCheck();
  }, [handleTabCheck, value]);

  useEffect(() => {
    window.addEventListener("resize", handleTabCheck);
    return () => window.removeEventListener("resize", handleTabCheck);
  }, [handleTabCheck]);

  return (
    <TabContext.Provider value={{ indicatorStyle }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(
          "flex flex-col items-start lg:flex-row lg:justify-between",
          className,
        )}
        {...props}
        value={value}
        onValueChange={setValue}
      />
    </TabContext.Provider>
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { indicatorStyle } = useTabContext();

  return (
    <>
      <div className="relative w-full lg:w-auto">
        <TabsPrimitive.List
          data-slot="tabs-list"
          className={cn(
            "flex items-start gap-6 border-b-2 border-gray-200 lg:max-w-xs lg:flex-col lg:border-b-0 lg:border-l-3",
            className,
          )}
          {...props}
        />
        <span
          className={cn(
            "absolute top-0 left-0 z-10 hidden w-[3px] rounded-full bg-blue-500 transition-all lg:block",
          )}
          style={{
            top: `${indicatorStyle.y}px`,
            height: `${indicatorStyle.height}px`,
          }}
        />

        <span
          className={cn(
            "absolute bottom-0 left-0 z-10 h-[2px] rounded-full bg-blue-500 transition-all lg:hidden",
          )}
          style={{
            left: `${indicatorStyle.x}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </div>
    </>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "cursor-pointer py-2 opacity-25 transition-all data-[state=active]:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("animate-fade-out-scale flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
