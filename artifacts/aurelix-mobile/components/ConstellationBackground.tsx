import React, { useEffect, useRef, useState, useCallback } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";

const GOLD = "#D4AF37";
const GOLD_DIM = "rgba(212,175,55,0.55)";
const MAX_DIST = 180;
const DOT_COUNT = 30;

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  glow: boolean;
}

function makeDots(w: number, h: number): Dot[] {
  return Array.from({ length: DOT_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.12 + Math.random() * 0.14;
    const glow = Math.random() < 0.22;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: glow ? 3.5 : 1.5 + Math.random() * 1,
      glow,
    };
  });
}

export function ConstellationBackground() {
  const { width, height } = Dimensions.get("window");
  const dotsRef = useRef<Dot[]>(makeDots(width, height));
  const [frame, setFrame] = useState(0);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const dots = dotsRef.current;
    const w = width;
    const h = height;
    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0) d.x = w;
      if (d.x > w) d.x = 0;
      if (d.y < 0) d.y = h;
      if (d.y > h) d.y = 0;
    }
    setFrame((f) => f + 1);
    rafRef.current = setTimeout(tick, 32); // ~30fps
  }, [width, height]);

  useEffect(() => {
    rafRef.current = setTimeout(tick, 32);
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [tick]);

  const dots = dotsRef.current;

  // Build lines
  const lines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MAX_DIST) {
        const t = 1 - dist / MAX_DIST;
        lines.push({
          x1: dots[i].x,
          y1: dots[i].y,
          x2: dots[j].x,
          y2: dots[j].y,
          opacity: t * t * 0.65,
        });
      }
    }
  }

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]} pointerEvents="none">
      <Svg width={width} height={height}>
        {lines.map((l, i) => (
          <Line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={GOLD}
            strokeWidth={0.8}
            strokeOpacity={l.opacity}
          />
        ))}
        {dots.map((d, i) => (
          <React.Fragment key={i}>
            {d.glow && (
              <Circle
                cx={d.x}
                cy={d.y}
                r={d.r * 3.5}
                fill={GOLD}
                fillOpacity={0.07}
              />
            )}
            <Circle
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill={d.glow ? "#E5C84A" : GOLD_DIM}
              fillOpacity={d.glow ? 0.9 : 0.7}
            />
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
});
