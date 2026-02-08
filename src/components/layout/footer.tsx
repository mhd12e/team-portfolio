import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="font-bold text-lg">{siteConfig.name}</span>
                        <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
                            {siteConfig.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={siteConfig.links.contact} className="text-muted-foreground hover:text-foreground transition-colors">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Contact</span>
                        </Link>
                        {/* Add more social icons as needed */}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <p>
                        Made with <span className="text-red-500">♥</span> by <Link href="https://mhd12.dev" target="_blank" className="font-medium text-foreground hover:text-primary transition-colors">Mohamed Elsayed</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
