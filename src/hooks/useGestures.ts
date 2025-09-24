import type { PanInfo } from "framer-motion";
import { useState } from "react";

interface GestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  velocityThreshold?: number;
}

export function useSwipeGestures({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  velocityThreshold = 500,
}: GestureOptions = {}) {
  const [isGesturing, setIsGesturing] = useState(false);

  const handlePanEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;

    // Check if swipe meets threshold requirements
    const meetsDistanceThreshold = Math.abs(offset.x) > threshold || Math.abs(offset.y) > threshold;
    const meetsVelocityThreshold =
      Math.abs(velocity.x) > velocityThreshold || Math.abs(velocity.y) > velocityThreshold;

    if (!meetsDistanceThreshold && !meetsVelocityThreshold) return;

    // Determine primary direction
    const isHorizontal = Math.abs(offset.x) > Math.abs(offset.y);

    if (isHorizontal) {
      if (offset.x > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (offset.x < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    } else {
      if (offset.y > 0 && onSwipeDown) {
        onSwipeDown();
      } else if (offset.y < 0 && onSwipeUp) {
        onSwipeUp();
      }
    }

    setIsGesturing(false);
  };

  const handlePanStart = () => {
    setIsGesturing(true);
  };

  return {
    isGesturing,
    panHandlers: {
      onPanStart: handlePanStart,
      onPanEnd: handlePanEnd,
    },
  };
}
