"use client";

import { useState } from "react";
import { SectionCard } from "./SectionCard";
import { Section2Data } from "@/types/section.types";
import { X } from "lucide-react";

type CardStackProps = {
  cards: Section2Data[];
  onClose: () => void;
};

export function CardStack({ cards, onClose }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const handleSwipe = (swipeDirection: "left" | "right") => {
    setDirection(swipeDirection);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setDirection(null);
    }, 300);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + cards.length) % cards.length;
    
    if (position === 0) {
      return {
        zIndex: 30,
        transform: direction === "left" 
          ? "translateX(-120%) rotate(-10deg)" 
          : direction === "right"
          ? "translateX(120%) rotate(10deg)"
          : "translateX(0) rotate(0deg)",
        opacity: direction ? 0 : 1,
      };
    } else if (position === 1) {
      return {
        zIndex: 20,
        transform: "translateY(-12px) scale(0.95)",
        opacity: 0.7,
      };
    } else if (position === 2) {
      return {
        zIndex: 10,
        transform: "translateY(-24px) scale(0.9)",
        opacity: 0.4,
      };
    } else {
      return {
        zIndex: 0,
        transform: "translateY(-36px) scale(0.85)",
        opacity: 0,
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-full bg-white p-2 hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative h-125">
          {cards.map((card, index) => {
            const style = getCardStyle(index);
            const position = (index - currentIndex + cards.length) % cards.length;

            return (
              <div
                key={card.id}
                className="absolute inset-0 transition-all duration-300 ease-out"
                style={style}
              >
                {position === 0 && (
                  <div
                    className="h-full cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => {
                      const startX = e.clientX;
                      const handleMouseMove = (moveEvent: MouseEvent) => {
                        const diff = moveEvent.clientX - startX;
                        if (Math.abs(diff) > 100) {
                          handleSwipe(diff > 0 ? "right" : "left");
                          document.removeEventListener("mousemove", handleMouseMove);
                          document.removeEventListener("mouseup", handleMouseUp);
                        }
                      };
                      const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove);
                        document.removeEventListener("mouseup", handleMouseUp);
                      };
                      document.addEventListener("mousemove", handleMouseMove);
                      document.addEventListener("mouseup", handleMouseUp);
                    }}
                    onTouchStart={(e) => {
                      const startX = e.touches[0].clientX;
                      const handleTouchMove = (moveEvent: TouchEvent) => {
                        const diff = moveEvent.touches[0].clientX - startX;
                        if (Math.abs(diff) > 100) {
                          handleSwipe(diff > 0 ? "right" : "left");
                          document.removeEventListener("touchmove", handleTouchMove);
                          document.removeEventListener("touchend", handleTouchEnd);
                        }
                      };
                      const handleTouchEnd = () => {
                        document.removeEventListener("touchmove", handleTouchMove);
                        document.removeEventListener("touchend", handleTouchEnd);
                      };
                      document.addEventListener("touchmove", handleTouchMove);
                      document.addEventListener("touchend", handleTouchEnd);
                    }}
                  >
                    <SectionCard
                      title={card.title}
                      heading={card.heading}
                      content={card.content}
                      variant="purple"
                    />
                  </div>
                )}
                {position !== 0 && (
                  <SectionCard
                    title={card.title}
                    heading={card.heading}
                    content={card.content}
                    variant="purple"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => handleSwipe("left")}
            className="rounded-full bg-white px-6 py-2 text-sm font-medium shadow-md hover:bg-gray-50"
          >
            ← Swipe Left
          </button>
          <span className="text-white">
            {currentIndex + 1} / {cards.length}
          </span>
          <button
            onClick={() => handleSwipe("right")}
            className="rounded-full bg-white px-6 py-2 text-sm font-medium shadow-md hover:bg-gray-50"
          >
            Swipe Right →
          </button>
        </div>
      </div>
    </div>
  );
}