"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/tilt-card";
import Spotlight from "@/components/ui/spotlight";

export function Projects() {
    return (
        <div className="relative overflow-hidden group">
            {/* Spotlight Context for this section - reduced opacity for subtlety */}
            <div className="absolute inset-0 z-0">
                <Spotlight className="h-full w-full bg-background/50" />
            </div>

            <SectionWrapper id="projects" className="py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display drop-shadow-md">Our Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Showcasing our commitment to sustainability and innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* GreenSteps Project */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full flex flex-col border-primary/20 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-colors duration-500 shadow-lg group/card">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <Badge variant="outline" className="mb-2 border-primary/40 text-primary bg-primary/5">Sustainability</Badge>
                                    </div>
                                    <CardTitle className="text-2xl font-display group-hover/card:text-primary transition-colors">GreenSteps</CardTitle>
                                    <CardDescription className="text-base text-muted-foreground/90">
                                        A sustainability tour project focusing on environmental awareness and action.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="h-48 rounded-md w-full relative overflow-hidden group/image border border-white/5 bg-muted/20">
                                        <Image
                                            src="/greensteps.png"
                                            alt="GreenSteps Project Preview"
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-primary/10 transition-colors duration-500" />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4">
                                    <Button variant="default" size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" asChild>
                                        <Link href="https://greensteps.devlix.org" target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TiltCard>
                    </motion.div>

                    {/* Placeholder for future projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col justify-center items-center p-8 border-dashed border-muted-foreground/20 bg-transparent hover:bg-muted/5 transition-colors duration-300">
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-medium font-display text-muted-foreground">More Coming Soon</h3>
                                <p className="text-sm text-muted-foreground/60 max-w-[200px]">
                                    We are constantly building and innovating. Stay tuned!
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
}
