import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact - Sneha Sharma | Next.js and GenAI developer",
  description:
    "Get in touch with Sneha Sharma for collaborations, projects, or queries.",
  openGraph: {
    title: "Contact - Sneha Sharma | Next.js and GenAI developer",
    description:
      "Get in touch with Sneha Sharma for collaborations, projects, or queries.",
    url: "https://www.snehasharma.me/contact",
    siteName: "Sneha Sharma Portfolio",
    images: [
      {
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sneha Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import type { ContactLink } from "./ContactClient";

const contactInfo: ContactLink[] = [
  {
    icon: "Mail",
    label: "Email",
    href: "mailto:celersneha@gmail.com",
    value: "celersneha@gmail.com",
  },
  {
    icon: "Phone",
    label: "Phone",
    href: "tel:+918770579552",
    value: "+91 87705 79552",
  },
  {
    icon: "Github",
    label: "GitHub",
    href: "https://github.com/celersneha",
    value: "github.com/celersneha",
  },
  {
    icon: "BsTwitterX",
    label: "Twitter",
    href: "https://x.com/celersneha",
    value: "x.com/celersneha",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/celersneha",
    value: "linkedin.com/in/celersneha",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactClient contactInfo={contactInfo} />
    </>
  );
}
