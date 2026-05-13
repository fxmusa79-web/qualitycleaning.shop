"use client";

import { useEffect, useRef } from "react";

export function HeroBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      /* autoplay geblokkeerd — poster blijft zichtbaar */
    });
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <div className="hero-static-bg" />
      <video
        ref={videoRef}
        className="hero-video-el"
        poster="/hero/poster.jpg"
        muted
        playsInline
        loop
        autoPlay
        preload="metadata"
        tabIndex={-1}
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim" />
    </div>
  );
}
