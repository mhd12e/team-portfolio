"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LiquidTextProps {
    children: React.ReactNode;
    className?: string;
}

export function LiquidText({
    children,
    className,
}: LiquidTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Check if mouse is inside the container
            const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

            if (isInside) {
                setOpacity(1);
                setPosition({ x, y });
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative py-4 px-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-sm overflow-hidden pointer-events-none transition-all duration-300 group cursor-default",
                className
            )}
        >
            {/* Base Text */}
            <div className="relative z-10 text-muted-foreground font-normal leading-relaxed">
                {children}
            </div>

            {/* Hover Gradient Text Reveal */}
            <div
                className="absolute inset-0 z-20 py-4 px-8 rounded-2xl pointer-events-none select-none"
                style={{
                    maskImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    opacity: opacity,
                    transition: "opacity 300ms ease",
                }}
            >
                <div className="bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 bg-clip-text text-transparent font-normal leading-relaxed">
                    {children}
                </div>
            </div>

            {/* Subtle Liquid/Glass Shine Effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-opacity duration-500"
                style={{
                    opacity: opacity ? 0.3 : 0,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />
        </div>
    );
}
