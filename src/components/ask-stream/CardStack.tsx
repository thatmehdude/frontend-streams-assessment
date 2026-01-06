"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionCard } from "./SectionCard";

type Card = {
  title: string;
  heading: string;
  content: string;
};

type CardStackProps = {
  cards: Card[];
  onClose: () => void;
};

const SWIPE_THRESHOLD = 120;

export function CardStack({ cards, onClose }: CardStackProps) {
  const [stack, setStack] = useState(cards);

  const rotateStack = () => {
    setStack((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative h-105 w-85">
        <AnimatePresence>
          {stack.slice(0, 3).map((card, index) => {
            const isTop = index === 0;

            return (
              <motion.div
                key={card.title}
                className="absolute rounded-xl"
                style={{
                  zIndex: 10 - index,
                  inset: index * 6,
                  border: !isTop
                    ? index === 1
                      ? "1px solid rgba(0,0,0,0.15)"
                      : "1px solid rgba(0,0,0,0.1)"
                    : "none",
                }}
                initial={{
                  x: index * 10,
                  y: -index * 10,
                }}
                animate={{
                  x: index * 10,
                  y: -index * 10,
                }}
                exit={{ opacity: 0 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
                    rotateStack();
                  }
                }}
                whileDrag={{
                  rotate: isTop ? 6 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 28,
                }}
              >
                <SectionCard
                  title={card.title}
                  heading={card.heading}
                  content={card.content}
                  variant="purple"
                  style={{
                    height: "100%",
                    borderRadius: "12px",
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
