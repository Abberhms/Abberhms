import { siteConfig } from "@/config/site";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    worksFor: {
      "@type": "Organization",
      name: "Voost Technology Limited",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kano",
      addressCountry: "Nigeria",
    },
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Frontend Web Development",
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RESTful APIs",
      "JWT Authentication",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} - Portfolio`,
    url: siteConfig.url,
    description: siteConfig.intro,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
