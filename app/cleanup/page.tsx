// app/cleanup/page.tsx
import type { Metadata } from "next";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export const metadata: Metadata = {
  title: "AI Cleanup Tool | Remove Objects & People from Photos – ImageFix",
  description:
    "Remove unwanted objects, people, text, or watermarks from images using AI cleanup. Clean your photos in seconds with our free online tool.",
  alternates: {
    canonical: "https://imagefix.co/cleanup",
  },
};

export default function CleanupPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Cleanup Tool",
    applicationCategory: "ImageEditing",
    operatingSystem: "Web",
    url: "https://imagefix.co/cleanup",
    description:
      "Remove unwanted objects, people, and distractions from photos using AI cleanup.",
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
        title="AI Cleanup – Remove Unwanted Objects"
        img="cleanup.jpg"
        subtitle="Erase people, objects, and distractions from your photos using AI. Just paint over what you want to remove and let ImageFix clean it up."
        slug="cleanup"
        steps={[
          "Upload the image you want to clean up.",
          "Brush over the object, person, or area you want to remove.",
          "Our AI fills the area with matching background. Preview and download your cleaned photo.",
        ]}
        useCases={[
          {
            title: "Travel & lifestyle photos",
            description:
              "Remove random people, cars, or clutter in the background of your travel shots.",
          },
          {
            title: "Product & brand photos",
            description:
              "Clean up reflections, props, or unwanted items in product images.",
          },
          {
            title: "Social media content",
            description:
              "Make your photos look more professional and focused before posting.",
          },
        ]}
        faqs={[
          {
            question: "What can I remove with cleanup?",
            answer:
              "You can remove people, objects, logos, light poles, trash, and most visual distractions from your photos.",
          },
          {
            question: "How do I mark what to remove?",
            answer:
              "In your final implementation, users will typically paint or select the area to remove using a brush or selection tool.",
          },
          {
            question: "Does cleanup always look perfect?",
            answer:
              "Results are best on simple or textured backgrounds. Complex patterns may require multiple tries or smaller selections.",
          },
        ]}
      />
    </>
  );
}
