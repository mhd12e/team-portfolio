
import { siteConfig } from "@/config/site";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`, // Assuming logo exists or will exist
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.twitter,
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.links.contact.replace("mailto:", ""),
            contactType: "customer support",
        },
        description: siteConfig.description,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
