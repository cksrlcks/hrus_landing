const ANIMATION_CONFIG = {
  COLORS: ["#ff5c5c", "#5cffa9", "#5c9bff"] as const,
  GRID_SIZE: 80,
  MIN_DISTANCE: 80 * 5,
  MAX_DISTANCE: 80 * 10,
  MAX_LINES: 8,
  TRAIL_FADE_MS: 1000,
  GRID_COLOR: "#F5F5F7",
  LINE_WIDTH: 1,
  BOUNDS_BUFFER: 100,
} as const;

type Direction = "up" | "down" | "left" | "right";

type TrailPoint = {
  x: number;
  y: number;
  alpha: number;
  time: number;
};

type LineScenario = {
  x: number;
  y: number;
  direction: Direction;
  speed: number;
  colorIndex: number;
  distance?: number;
};

type Line = {
  startX: number;
  startY: number;
  direction: Direction;
  speed: number;
  color: string;
  startTime: number;
  trail: TrailPoint[];
  distance: number;
};

export class GridAnimation {
  private window: Window;
  private lines: Line[] = [];
  private animationId?: number;

  constructor(window: Window) {
    this.window = window;
  }

  setupCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D | null {
    const dpr = this.window.devicePixelRatio || 1;
    const width = this.window.innerWidth;
    const height = this.window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      return ctx;
    }
    return null;
  }

  getScenarios(): LineScenario[] {
    const w = this.window.innerWidth;
    const h = this.window.innerHeight;
    const { GRID_SIZE } = ANIMATION_CONFIG;

    return [
      {
        x: 0,
        y: GRID_SIZE * 1,
        direction: "right",
        speed: 0.3, // 6배 빠르게
        colorIndex: 0,
      },
      {
        x: w,
        y: GRID_SIZE * 3,
        direction: "left",
        speed: 0.35, // 약 6배 빠르게
        colorIndex: 1,
      },
      {
        x: 0,
        y: GRID_SIZE * 5,
        direction: "right",
        speed: 0.4, // 약 6배 빠르게
        colorIndex: 2,
      },
      {
        x: w,
        y: GRID_SIZE * 7,
        direction: "left",
        speed: 0.25, // 5배 빠르게
        colorIndex: 0,
      },
      {
        x: GRID_SIZE * 2,
        y: 0,
        direction: "down",
        speed: 0.45, // 약 6배 빠르게
        colorIndex: 1,
      },
      {
        x: GRID_SIZE * 4,
        y: h,
        direction: "up",
        speed: 0.35, // 약 6배 빠르게
        colorIndex: 2,
      },
      {
        x: GRID_SIZE * 6,
        y: 0,
        direction: "down",
        speed: 0.4, // 약 6배 빠르게
        colorIndex: 0,
      },
      {
        x: GRID_SIZE * 8,
        y: h,
        direction: "up",
        speed: 0.3, // 6배 빠르게
        colorIndex: 1,
      },
    ];
  }

  createLine(scenario: LineScenario): Line {
    const {
      x,
      y,
      direction,
      speed,
      colorIndex,
      distance = ANIMATION_CONFIG.MIN_DISTANCE +
        Math.random() *
          (ANIMATION_CONFIG.MAX_DISTANCE - ANIMATION_CONFIG.MIN_DISTANCE),
    } = scenario;

    return {
      startX: x,
      startY: y,
      direction,
      speed,
      color:
        ANIMATION_CONFIG.COLORS[colorIndex % ANIMATION_CONFIG.COLORS.length],
      startTime: performance.now(),
      trail: [],
      distance,
    };
  }

  initializeLines(): void {
    const scenarios = this.getScenarios();
    this.lines = Array.from({ length: ANIMATION_CONFIG.MAX_LINES }, (_, i) =>
      this.createLine(scenarios[i % scenarios.length]),
    );
  }

  private getDirectionVector(direction: Direction): [number, number] {
    const directionMap: Record<Direction, [number, number]> = {
      up: [0, -1],
      down: [0, 1],
      left: [-1, 0],
      right: [1, 0],
    };
    return directionMap[direction];
  }

  drawGrid(ctx: CanvasRenderingContext2D): void {
    const w = ctx.canvas.width / (this.window.devicePixelRatio || 1);
    const h = ctx.canvas.height / (this.window.devicePixelRatio || 1);
    const { GRID_SIZE, GRID_COLOR, LINE_WIDTH } = ANIMATION_CONFIG;

    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = LINE_WIDTH;

    for (let x = 0; x <= w; x += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    for (let y = 0; y <= h; y += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }

  private hexToRgb(hex: string): string {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  private updateTrail(line: Line, x: number, y: number, now: number): void {
    line.trail.push({ x, y, alpha: 1, time: now });

    line.trail.forEach((pt) => {
      const age = now - pt.time;
      pt.alpha = Math.max(0, 1 - age / ANIMATION_CONFIG.TRAIL_FADE_MS);
    });

    line.trail = line.trail.filter((pt) => pt.alpha > 0);
  }

  private drawTrail(ctx: CanvasRenderingContext2D, line: Line): void {
    const visibleTrail = line.trail;

    ctx.lineWidth = ANIMATION_CONFIG.LINE_WIDTH;

    for (let i = 0; i < visibleTrail.length - 1; i++) {
      const curr = visibleTrail[i];
      const next = visibleTrail[i + 1];

      if (curr.alpha <= 0) continue;

      ctx.strokeStyle = `rgba(${this.hexToRgb(line.color)}, ${curr.alpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.moveTo(curr.x, curr.y);
      ctx.lineTo(next.x, next.y);
      ctx.stroke();
    }
  }

  private isLineOutOfBounds(
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D,
  ): boolean {
    const canvasW = ctx.canvas.width / (this.window.devicePixelRatio || 1);
    const canvasH = ctx.canvas.height / (this.window.devicePixelRatio || 1);
    const { BOUNDS_BUFFER } = ANIMATION_CONFIG;

    return (
      x < -BOUNDS_BUFFER ||
      x > canvasW + BOUNDS_BUFFER ||
      y < -BOUNDS_BUFFER ||
      y > canvasH + BOUNDS_BUFFER
    );
  }

  animate(ctx: CanvasRenderingContext2D): void {
    const now = performance.now();

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.drawGrid(ctx);

    this.lines.forEach((line, index) => {
      const elapsed = now - line.startTime;
      const [dx, dy] = this.getDirectionVector(line.direction);
      const x = line.startX + dx * line.speed * elapsed;
      const y = line.startY + dy * line.speed * elapsed;

      this.updateTrail(line, x, y, now);
      this.drawTrail(ctx, line);

      if (this.isLineOutOfBounds(x, y, ctx)) {
        const scenarios = this.getScenarios();
        this.lines[index] = this.createLine(
          scenarios[index % scenarios.length],
        );
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate(ctx));
  }

  startAnimation(ctx: CanvasRenderingContext2D): void {
    this.animate(ctx);
  }

  stopAnimation(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
    }
  }

  destroy(): void {
    this.stopAnimation();
    this.lines = [];
  }
}
