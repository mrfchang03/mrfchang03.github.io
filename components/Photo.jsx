"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SIZE = 506;
const PAD = 3;
const RX = 40;
const inner = SIZE - PAD * 2;
const PERIM = 2 * (inner + inner - 2 * RX) + 2 * Math.PI * RX;

// Multiple orbiting strokes, all orange
const LAYERS = [
  { length: 0.18, width: 6,  speed: 7.0, dir: -1, phase: 0.00 },
  { length: 0.12, width: 4,  speed: 5.5, dir:  1, phase: 0.25 },
  { length: 0.08, width: 3,  speed: 4.0, dir: -1, phase: 0.55 },
  { length: 0.24, width: 8,  speed: 9.0, dir:  1, phase: 0.78 },
];

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
        {/* Multi-layer animated perimeter */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          fill="none"
          shapeRendering="geometricPrecision"
          aria-hidden
        >
          {LAYERS.map((layer, i) => {
            const dash = PERIM * layer.length;
            const gap = PERIM;
            const initialOffset = -PERIM * layer.phase;

            return (
              <motion.rect
                key={i}
                x={PAD}
                y={PAD}
                width={inner}
                height={inner}
                rx={RX}
                stroke="#ee9b00" // orange stroke
                strokeWidth={layer.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={`${dash} ${gap}`}
                initial={{ strokeDashoffset: initialOffset }}
                animate={{ strokeDashoffset: initialOffset + layer.dir * -PERIM }}
                transition={{ duration: layer.speed, ease: "linear", repeat: Infinity }}
              />
            );
          })}
        </motion.svg>

        {/* Photo with matching rounded-square mask + white border */}
        <div
          className="absolute inset-0 m-auto z-10 overflow-hidden
                     w-[274px] h-[274px] xl:w-[474px] xl:h-[474px]
                     ring-2 ring-white/80"
          style={{ borderRadius: `${RX}px` }}
        >
          <Image
            src="/assets/photo.png"
            alt="Matthew Chang"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
