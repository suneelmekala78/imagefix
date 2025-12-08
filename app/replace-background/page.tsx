// app/replace-background/page.tsx
import type { Metadata } from "next";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export const metadata: Metadata = {
  title:
    "AI Background Replacer | Change Image Background Online – ImageFix",
  description:
    "Change image backgrounds in seconds. Replace with colors, custom photos, or AI-generated scenes. Fast and free background changer tool at ImageFix.co.",
  alternates: {
    canonical: "https://imagefix.co/replace-background",
  },
};

export default function ReplaceBackgroundPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Background Replacer",
    applicationCategory: "ImageEditing",
    operatingSystem: "Web",
    url: "https://imagefix.co/replace-background",
    description:
      "Replace image backgrounds with solid colors, custom photos, or AI-generated scenes.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolPageTemplate
        title="AI Background Replacer"
        img="bgreplace.webp"
        subtitle="Change any image background in seconds. Switch to solid colors, your own photos, or AI-generated scenes with one click."
        slug="replace-background"
        steps={[
          "Upload the image whose background you want to change.",
          "Our AI detects the subject and separates it from the background.",
          "Choose a solid color, upload a new background, or use an AI-generated scene, then download the final image.",
        ]}
        useCases={[
          {
            title: "Product photos",
            description:
              "Match product backgrounds to your brand color or marketplace requirements.",
          },
          {
            title: "Profile & portrait shots",
            description:
              "Create studio-like portraits by replacing messy backgrounds.",
          },
          {
            title: "Thumbnails & banners",
            description:
              "Design eye-catching thumbnails and social media graphics with custom backdrops.",
          },
        ]}
        faqs={[
          {
            question: "Can I upload my own background?",
            answer:
              "Yes, your final implementation can allow uploading a custom image as the new background.",
          },
          {
            question: "Does it support solid color backgrounds?",
            answer:
              "You can offer a preset palette of solid colors so users can quickly change backgrounds.",
          },
          {
            question: "Will hair and edges look clean?",
            answer:
              "Edge quality depends on your segmentation model, but AI is usually very good with hair and detailed outlines.",
          },
        ]}
      />
    </>
  );
}
