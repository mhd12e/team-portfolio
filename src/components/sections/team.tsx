"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/magnetic";
import TiltCard from "@/components/ui/tilt-card";

export function Team() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <SectionWrapper id="team" className="py-24 bg-muted/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 space-y-4"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display drop-shadow-md">Meet the Team</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                    The brilliant minds behind Al Noor Innovators.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {siteConfig.team.map((member) => (
                    <motion.div key={member.name} variants={item}>
                        <TiltCard className="h-full">
                            <Card className="h-full overflow-hidden border-primary/20 hover:border-primary/50 transition-colors duration-500 shadow-lg bg-card/60 backdrop-blur-md group/card">
                                <CardHeader className="text-center relative pt-10">
                                    <div className="mx-auto mb-4 relative">
                                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover/card:opacity-50 transition-opacity duration-500 scale-125" />
                                        <Avatar className="h-24 w-24 mx-auto border-2 border-primary/20 group-hover/card:border-primary/60 transition-colors duration-300">
                                            <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                                            <AvatarFallback className="bg-primary/5 text-primary text-xl font-display">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <CardTitle className="text-xl font-display group-hover/card:text-primary transition-colors">{member.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

                                    <div className="flex justify-center gap-2 pt-2">
                                        {member.social.github && (
                                            <Magnetic>
                                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                                    <Link href={member.social.github} target="_blank">
                                                        <Github className="h-5 w-5" />
                                                        <span className="sr-only">GitHub</span>
                                                    </Link>
                                                </Button>
                                            </Magnetic>
                                        )}
                                        {member.social.portfolio && (
                                            <Magnetic>
                                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                                    <Link href={member.social.portfolio} target="_blank">
                                                        <Globe className="h-5 w-5" />
                                                        <span className="sr-only">Portfolio</span>
                                                    </Link>
                                                </Button>
                                            </Magnetic>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </TiltCard>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
