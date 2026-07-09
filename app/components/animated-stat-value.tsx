"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatValueProps = {
  value: string;
  className?: string;
  durationMs?: number;
};

function splitValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      target: 0,
      decimals: 0,
      suffix: value,
    };
  }

  const [, rawNumber, suffix] = match;
  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;

  return {
    target: Number(rawNumber),
    decimals,
    suffix,
  };
}

export default function AnimatedStatValue({
  value,
  className,
  durationMs = 1400,
}: AnimatedStatValueProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasAnimated(true);
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    const { target } = splitValue(value);
    const startTime = performance.now();
    let frameId = 0;

    const updateValue = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(target * easedProgress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateValue);
      }
    };

    frameId = window.requestAnimationFrame(updateValue);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [durationMs, hasAnimated, value]);

  const { target, decimals, suffix } = splitValue(value);
  const resolvedValue = hasAnimated ? displayValue : 0;
  const formattedValue =
    target === 0
      ? value
      : `${resolvedValue.toFixed(decimals)}${suffix}`;

  return (
    <p ref={ref} className={className}>
      {formattedValue}
    </p>
  );
}
