// app/bg-remover/page.tsx
import type { Metadata } from "next";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export const metadata: Metadata = {
  title:
    "Free AI Background Remover Online | Remove Image Background – ImageFix",
  description:
    "Remove image backgrounds instantly with AI. Upload your photo and download a clean transparent PNG in seconds. Free online background remover at ImageFix.co.",
  alternates: {
    canonical: "https://imagefix.co/bg-remover",
  },
};

export default function BgRemoverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Background Remover",
    applicationCategory: "ImageEditing",
    operatingSystem: "Web",
    url: "https://imagefix.co/bg-remover",
    description:
      "A free online AI tool to remove the background from images and export transparent PNGs.",
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
        title="Remove the background from images for free."
        img="bg_remove.png"
        subtitle="Upload your image and get a clean transparent background in seconds. Perfect for product photos, profile pictures, thumbnails, and more."
        slug="bg-remover"
        steps={[
          "Upload any JPG or PNG image you want to edit.",
          "Our AI automatically detects the subject and removes the background.",
          "Preview the result and download a transparent PNG.",
        ]}
        useCases={[
          {
            title: "E-commerce",
            description:
              "Create clean product photos for Amazon, Shopify, Flipkart, or your own store.",
          },
          {
            title: "Content creators",
            description:
              "Design YouTube thumbnails, social media posts, and banners with cut-out subjects.",
          },
          {
            title: "Design & branding",
            description:
              "Remove backgrounds for logos, mockups, presentations and marketing materials.",
          },
        ]}
        faqs={[
          {
            question: "Is the background remover free?",
            answer:
              "Yes, the background remover on ImageFix is free to use and supported by ads. No account is required.",
          },
          {
            question: "Which formats are supported?",
            answer:
              "You can upload JPG or PNG images. The output is a PNG file with a transparent background.",
          },
          {
            question: "Is my image stored permanently?",
            answer:
              "Your image is only processed to generate the result. You can customize your exact storage/privacy policy in the backend.",
          },
        ]}
      />
    </>
  );
}
