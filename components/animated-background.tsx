"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.3, y: 0.3, radius: 0.4, color: "rgba(99, 102, 241, 0.15)" }, // Indigo
      { x: 0.7, y: 0.6, radius: 0.35, color: "rgba(168, 85, 247, 0.12)" }, // Purple
      { x: 0.5, y: 0.8, radius: 0.3, color: "rgba(59, 130, 246, 0.1)" }, // Blue
    ];

    const animate = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob, i) => {
        const x = canvas.width * (blob.x + Math.sin(time + i) * 0.1);
        const y = canvas.height * (blob.y + Math.cos(time + i * 0.5) * 0.1);
        const radius = Math.min(canvas.width, canvas.height) * blob.radius;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
