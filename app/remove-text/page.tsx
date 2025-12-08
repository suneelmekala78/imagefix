// app/remove-text/page.tsx
import type { Metadata } from "next";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export const metadata: Metadata = {
  title: "Remove Text from Image Online | Free AI Eraser – ImageFix",
  description:
    "Erase text from any image using AI. Clean labels, captions, or watermarks instantly. Free online AI text remover at ImageFix.co.",
  alternates: {
    canonical: "https://imagefix.co/remove-text",
  },
};

export default function RemoveTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Remove Text from Image",
    applicationCategory: "ImageEditing",
    operatingSystem: "Web",
    url: "https://imagefix.co/remove-text",
    description:
      "Erase text, labels, and captions from images using AI. Clean your photos in seconds.",
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
        title="Remove Text from Images"
        img="removetext.jpg"
        subtitle="Erase text, captions and labels from your images using AI. Clean up screenshots, photos, and graphics without manual editing."
        slug="remove-text"
        steps={[
          "Upload an image that contains text you want to remove.",
          "Highlight or select the text area in your editing UI.",
          "Our AI removes the text and fills the background intelligently.",
        ]}
        useCases={[
          {
            title: "Screenshots",
            description:
              "Hide sensitive text in screenshots while keeping the layout intact.",
          },
          {
            title: "Marketing graphics",
            description:
              "Remove old offers, dates, or copy from banners and reuse the design.",
          },
          {
            title: "Photos with signs",
            description:
              "Erase distracting signs or text from photos for a cleaner look.",
          },
        ]}
        faqs={[
          {
            question: "Can I remove watermarks?",
            answer:
              "Technically, AI can remove most text or watermark-like overlays, but make sure you respect copyright and usage rights.",
          },
          {
            question: "Will the background look natural?",
            answer:
              "For simple backgrounds, results are usually very natural. Complex scenes may need smaller selections for best results.",
          },
          {
            question: "Is this tool free?",
            answer:
              "Yes, the text removal tool is free to use on ImageFix and supported by ads.",
          },
        ]}
      />
    </>
  );
}
