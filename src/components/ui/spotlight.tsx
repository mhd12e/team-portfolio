"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";

type SpotlightProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function Spotlight({ children, className = "" }: SpotlightProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const position = useMousePosition();
    const [opacity, setOpacity] = useState(0);

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    // Adjust position relative to the container for the gradient
    const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setRelativePosition({
                x: position.x - rect.left,
                y: position.y - rect.top
            });
        }
    }, [position]);


    return (
        <div
            ref={divRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative w-full overflow-hidden bg-background",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${relativePosition.x}px ${relativePosition.y}px, var(--color-primary) 0%, transparent 60%)`,
                }}
            />
            {/* Grid overlay */}
            <div
                className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.1] pointer-events-none"
                style={{
                    maskImage: `radial-gradient(300px circle at ${relativePosition.x}px ${relativePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(300px circle at ${relativePosition.x}px ${relativePosition.y}px, black, transparent)`,
                }}
            />
            {children}
        </div>
    );
}
