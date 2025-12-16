export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ODO",
    url: "https://odo.fr",
    logo: "https://odo.fr/logo.png",
    description: "Agence de publicité digitale experte en Google Ads, Meta Ads et TikTok Ads.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Avenue des Champs-Élysées",
      addressLocality: "Paris",
      postalCode: "75008",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-23-45-67-89",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/odo",
      "https://twitter.com/odo",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
