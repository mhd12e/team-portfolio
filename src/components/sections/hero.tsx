"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Magnetic from "@/components/ui/magnetic";
import Spline from '@splinetool/react-spline';
import { LiquidText } from "@/components/ui/liquid-text";
import { useState, useEffect } from "react";

import { LoadingScreen } from "@/components/ui/loading-screen";
import { AnimatePresence } from "framer-motion";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Aspect ratio logic
    const RATIO_WIDE = 1594 / 907; // ~1.757
    const RATIO_MOBILE = 965 / 904; // ~1.067

    const WIDE_SCENE = "https://prod.spline.design/DQGHyqSuo4LBIZul/scene.splinecode";
    const NARROW_SCENE = "https://prod.spline.design/WrZTa-tDaJNGzhuD/scene.splinecode";
    const MOBILE_SCENE = "https://prod.spline.design/dgSvd8GhmIAB3B9g/scene.splinecode";

    const [sceneUrl, setSceneUrl] = useState(WIDE_SCENE);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const ratio = width / height;

            if (ratio < RATIO_MOBILE) {
                setSceneUrl(MOBILE_SCENE);
            } else if (ratio < RATIO_WIDE) {
                setSceneUrl(NARROW_SCENE);
            } else {
                setSceneUrl(WIDE_SCENE);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Safety timeout to ensure loading screen doesn't stick forever
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // 4 seconds max load time
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden pt-0">
            <AnimatePresence>
                {isLoading && <LoadingScreen />}
            </AnimatePresence>

            {/* Spline 3D Background */}
            <div className="absolute inset-0 z-0">
                <Spline
                    scene={sceneUrl}
                    className="w-full h-full"
                    onLoad={() => setIsLoading(false)}
                />
                {/* Spline Attribution Badge */}
                <div className="flex absolute bottom-5 right-5 items-center gap-2 px-5 py-2.5 bg-[#030506]/90 backdrop-blur-md rounded-full border border-primary/20 hover:border-primary/50 transition-colors shadow-lg z-50">
                    <span className="text-sm text-muted-foreground font-medium">Made by</span>
                    <Link
                        href="https://mhd12.dev"
                        target="_blank"
                        className="text-sm font-bold text-primary hover:text-amber-400 transition-colors"
                    >
                        mhd12
                    </Link>
                </div>
            </div>

            <SectionWrapper className="relative z-10 pointer-events-none">
                <div className="text-center max-w-4xl mx-auto space-y-4 pointer-events-none">

                    <motion.div
                        style={{ y, opacity }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2 border border-primary/20 tracking-wide uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-sm pointer-events-none mt-24 md:mt-40">
                            Innovating for Impact
                        </span>
                    </motion.div>

                    {/* Restore Original Text for Mobile/Vertical Layouts */}
                    {sceneUrl === MOBILE_SCENE && (
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white via-primary to-amber-400 bg-clip-text text-transparent pb-2 pointer-events-none drop-shadow-sm font-display"
                        >
                            We are Al Noor Innovators.
                        </motion.h1>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                        className="max-w-2xl mx-auto pointer-events-none"
                    >
                        <LiquidText>
                            {siteConfig.description} We tackle global challenges through code, creativity, and collaboration.
                        </LiquidText>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 pointer-events-auto"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                            <Magnetic>
                                <Button size="lg" className="relative rounded-full px-8 text-lg shadow-xl hover:shadow-primary/25 transition-all duration-300 bg-background text-foreground hover:bg-muted/50 border border-primary/20" asChild>
                                    <Link href="#projects">
                                        View Our Projects
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </Magnetic>
                        </div>

                        <Magnetic>
                            <Button size="lg" variant="ghost" className="rounded-full px-8 text-lg hover:bg-primary/10 hover:text-primary transition-all duration-300" asChild>
                                <Link href="#team">Meet the Team</Link>
                            </Button>
                        </Magnetic>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
}

