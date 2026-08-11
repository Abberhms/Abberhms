"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Code2 } from "lucide-react";

interface PortfolioImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  priority?: boolean;
  type: "profile" | "about";
  className?: string;
}

export function PortfolioImage({
  src,
  fallbackSrc,
  alt,
  priority = false,
  type,
  className = "",
}: PortfolioImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[300px] rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group ${className}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 p-1 shadow-lg shadow-sky-500/20 mb-6 group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
            {type === "profile" ? (
              <User className="w-12 h-12 text-sky-400" />
            ) : (
              <Code2 className="w-12 h-12 text-teal-400" />
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-1">
          Sulaiman Abba Muhammad
        </h3>
        <p className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-4">
          {type === "profile"
            ? "Software Engineer | Frontend (Web & Mobile)"
            : "Frontend Web & Mobile Specialist"}
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-950/60 border border-sky-800/60 text-sky-300">
          Kano, Nigeria
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={handleImageError}
      />
    </div>
  );
}
