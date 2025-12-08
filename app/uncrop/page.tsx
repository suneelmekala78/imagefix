// app/uncrop/page.tsx
import type { Metadata } from "next";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export const metadata: Metadata = {
  title:
    "AI Uncrop Image Online | Expand, Outpaint & Fix Cut-Off Photos – ImageFix",
  description:
    "Uncrop and expand photos using AI outpainting. Fix cut-off edges, widen frames, and restore missing image areas instantly. Free uncrop tool online at ImageFix.co.",
  alternates: {
    canonical: "https://imagefix.co/uncrop",
  },
};

export default function UncropPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Uncrop Tool",
    applicationCategory: "ImageEditing",
    operatingSystem: "Web",
    url: "https://imagefix.co/uncrop",
    description:
      "Uncrop and extend images using AI outpainting. Fix cut-off photos and expand backgrounds.",
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
        title="AI Uncrop & Image Expander"
        img="uncrop.webp"
        subtitle="Fix cut-off photos and expand your canvas using AI outpainting. Add extra space to any side of your image in seconds."
        slug="uncrop"
        steps={[
          "Upload the image that is cut off or needs more space.",
          "Choose where to expand (top, bottom, left, right, or all sides).",
          "Let the AI outpaint new pixels and download your uncropped image.",
        ]}
        useCases={[
          {
            title: "Social media crops",
            description:
              "Adjust vertical and horizontal photos to fit Instagram, YouTube thumbnails, and more.",
          },
          {
            title: "Product photos",
            description:
              "Add breathing room around products for better layouts in banners and ads.",
          },
          {
            title: "Old photos",
            description:
              "Recover missing edges in scanned or old pictures using AI.",
          },
        ]}
        faqs={[
          {
            question: "What is AI uncropping?",
            answer:
              "AI uncropping uses outpainting to extend the borders of your image and generate realistic extra content.",
          },
          {
            question: "Can I choose how much to uncrop?",
            answer:
              "Yes, you can define how much to expand each side. Connect this UI to your controls in the actual implementation.",
          },
          {
            question: "Does it work with any image?",
            answer:
              "Most images work well, especially photos with clear backgrounds or scenes. Complex patterns may need fine-tuning.",
          },
        ]}
      />
    </>
  );
}
