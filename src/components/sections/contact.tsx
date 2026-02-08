import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-16 text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Innovate?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We are always open to new ideas and collaborations. Reach out to us if you want to build something amazing together.
                </p>
                <Button size="lg" className="gap-2" asChild>
                    <Link href={siteConfig.links.contact}>
                        <Mail className="h-4 w-4" />
                        Contact Us
                    </Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
