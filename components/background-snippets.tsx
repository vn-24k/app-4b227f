import React from "react";

/**
 * 21st.dev Background Snippets by @ibelick (Julien Thibeaut)
 * Pure Tailwind CSS & CSS gradients - Zero JS overhead.
 */

// 1. Dark Radial Glow (Hero highlight)
export function RadialGlowBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_0%,#000_35%,#6366f1_75%,#a855f7_100%)] opacity-35"
      aria-hidden="true"
    />
  );
}

// 2. Modern Dot Pattern
export function DotGridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      aria-hidden="true"
    />
  );
}

// 3. Grid Lines
export function LineGridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      aria-hidden="true"
    />
  );
}
