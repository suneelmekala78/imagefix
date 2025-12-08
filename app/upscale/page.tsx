// app/upscale/page.tsx
import type { Metadata } from "next";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export const metadata: Metadata = {
  title:
    "Free AI Image Upscaler | Enhance Quality & Increase Resolution – ImageFix",
  description:
    "Upscale low-quality photos to HD using AI. Sharpen details, remove noise, and increase resolution up to 4×. 100% free online image upscaler at ImageFix.co.",
  alternates: {
    canonical: "https://imagefix.co/upscale",
  },
};

export default function UpscalePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Image Upscaler",
    applicationCategory: "ImageEditing",
    operatingSystem: "Web",
    url: "https://imagefix.co/upscale",
    description:
      "Upscale and enhance images using AI. Improve resolution and sharpness without losing quality.",
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
        title="AI Image Upscaler"
        img="upscale.jpg"
        subtitle="Turn low-resolution, blurry photos into sharp HD images. Upscale up to 4× with AI-powered enhancement."
        slug="upscale"
        steps={[
          "Upload your low-resolution or blurry image.",
          "Select your upscale factor (2×, 3×, 4× depending on your backend config).",
          "Let the AI enhance your image and download the upscaled result.",
        ]}
        useCases={[
          {
            title: "Old & low-res photos",
            description:
              "Improve old family photos or small images to use in modern displays.",
          },
          {
            title: "E-commerce & print",
            description:
              "Upscale images for print materials, posters, and high-resolution product pages.",
          },
          {
            title: "Logos & graphics",
            description:
              "Enlarge logos and simple graphics without losing sharpness.",
          },
        ]}
        faqs={[
          {
            question: "How much can I upscale an image?",
            answer:
              "Typically up to 4× works best. You can set the exact maximum scale in your backend model or API.",
          },
          {
            question: "Will upscaling remove noise and blur?",
            answer:
              "AI upscaling can reduce noise, sharpen edges, and improve overall clarity compared to simple resizing.",
          },
          {
            question: "Is there a file size limit?",
            answer:
              "You can define your own file size limit (for example 10–20MB) depending on server capacity and model speed.",
          },
        ]}
      />
    </>
  );
}
