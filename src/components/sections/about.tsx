import { SectionWrapper } from "@/components/layout/section-wrapper";

export function About() {
    return (
        <SectionWrapper id="about" className="bg-muted/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        About <span className="text-primary">Al Noor Innovators</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We are a passionate team of developers, designers, and innovators dedicated to creating solutions that make a real difference.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Our mission is to tackle hackathons and real-world problems. We believe in the power of technology to drive sustainability, education, and social impact.
                    </p>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-accent/10 border border-border/50 flex items-center justify-center">
                    {/* Placeholder for team photo or abstract graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                    <span className="text-muted-foreground font-medium">Team Innovation</span>
                </div>
            </div>
        </SectionWrapper>
    );
}
