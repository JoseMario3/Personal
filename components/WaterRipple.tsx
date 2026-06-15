"use client";
import { useEffect } from "react";

export default function WaterRipple() {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const y = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        border: 2px solid rgba(0, 163, 255, 0.6);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: rippleOut 0.9s ease-out forwards;
      `;
      document.body.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);

  return null;
}
