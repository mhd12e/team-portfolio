"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030506]"
        >
            <div className="relative">
                {/* Pulsing Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
                />

                <div className="relative z-10 flex flex-col items-center space-y-6">
                    {/* Logo/Title */}
                    <div className="text-center space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-display bg-gradient-to-r from-white via-primary to-amber-400 bg-clip-text text-transparent">
                            Al Noor Innovators
                        </h1>
                        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                            Innovating for Impact
                        </p>
                    </div>

                    {/* Loading Indicator */}
                    <div className="w-48 h-1 bg-muted/20 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
