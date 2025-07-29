"use client";

import { useEffect, useRef } from "react";
import { GridAnimation } from "@/lib/animation/GridAnimation";
import { cn } from "@/lib/utils";

type AnimatedCanvasProps = {
  className?: string;
};

export default function AnimatedCanvas({ className }: AnimatedCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const engineRef = useRef<GridAnimation | null>(null);

  const handleResize = () => {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;

    const ctx = engine.setupCanvas(canvas);
    if (ctx) {
      ctxRef.current = ctx;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new GridAnimation(window);
    engineRef.current = engine;

    const ctx = engine.setupCanvas(canvas);
    if (!ctx) return;
    ctxRef.current = ctx;

    engine.initializeLines();
    engine.startAnimation(ctx);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none h-[100vh] w-full overflow-hidden",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
          background: "#fff",
        }}
      />
    </div>
  );
}
