// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ImageFix – Free AI Image Tools | Background Remover, Upscaler, Uncrop & More",
  description:
    "ImageFix.co offers free AI tools like background remover, upscaler, uncrop, cleanup, and text remover. Fix and enhance your images instantly online with no signup.",
  alternates: {
    canonical: "https://imagefix.co/",
  },
};

export default function HomePage() {
  const tools = [
    {
      name: "Background Remover",
      slug: "bg-remover",
      description: "Remove image backgrounds and download transparent PNGs.",
    },
    {
      name: "Image Upscaler",
      slug: "upscale",
      description: "Upscale low-res images to HD using AI.",
    },
    {
      name: "AI Uncrop",
      slug: "uncrop",
      description: "Extend and expand photos using AI outpainting.",
    },
    {
      name: "Cleanup Tool",
      slug: "cleanup",
      description: "Remove unwanted objects, people and clutter.",
    },
    {
      name: "Remove Text",
      slug: "remove-text",
      description: "Erase text, labels and captions from images.",
    },
    {
      name: "Replace Background",
      slug: "replace-background",
      description: "Swap image backgrounds in seconds.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ImageFix",
    url: "https://imagefix.co",
    description:
      "Free AI image editing tools including background remover, upscaler, uncrop, cleanup and more.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen px-4 py-10 md:px-8 lg:px-16">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Fix any image with AI. Instantly.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            ImageFix is your all-in-one AI toolkit for background removal,
            upscaling, uncropping, cleanup, and more – right in your browser.
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            No signup required · Free to use · Built for creators, businesses
            and students
          </p>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
                <p className="text-sm text-gray-600 mb-3">
                  {tool.description}
                </p>
                <span className="text-xs font-medium underline">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
