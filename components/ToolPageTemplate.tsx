// components/ToolPageTemplate.tsx
"use client";

import React from "react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

type ToolPageTemplateProps = {
  title: string;
  img: string;
  subtitle: string;
  slug: string; // e.g. "bg-remover"
  uploadLabel?: string;
  steps: string[];
  useCases: { title: string; description: string }[];
  faqs: FAQ[];
};

export const testimonialsData = [
  {
    id: 1,
    text: "I've been using ImageFix.co for almost two years, mainly for my Instagram content. It’s incredibly simple, fast, and has made my workflow so much easier.",
    author: "Chemarthi Venkatesh",
    image: "test1.png",
    jobTitle: "Full Stack Developer",
  },
  {
    id: 2,
    text: "I've been using ImageFix.co for about six months and the experience has been fantastic. The output quality is impressive, and I highly recommend everyone to give it a try.",
    author: "Harika S",
    image: "test2.png",
    jobTitle: "MERN Stack Developer",
  },
];

export function ToolPageTemplate({
  title,
  img,
  subtitle,
  slug,
  uploadLabel = "Upload image",
  steps,
  useCases,
  faqs,
}: ToolPageTemplateProps) {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 lg:px-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 mb-20 flex items-center justify-between max-sm:flex-col-reverse">
        <div>
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
            {title}
          </h1>

          {/* You can still use your subtitle / extra text here */}
          <p className="my-4 text-[15px] text-gray-500">{subtitle}</p>

          <p className="mb-6 text-xs md:text-sm text-gray-500 max-sm:hidden">
            Free to use · Works in your browser · Powered by AI
          </p>

          <div>
            <input
              // onChange={(e) => removeBg(e.target.files?.[0])}
              type="file"
              accept="image/*"
              id="upload1"
              hidden
            />
            <label
              className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-[#0093f3] m-auto hover:scale-105 transition-all duration-700"
              htmlFor="upload1"
            >
              <img
                width={20}
                src="data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.3232%200.362753C15.1118%200.131645%2014.8132%200%2014.5%200C14.1868%200%2013.8882%200.131645%2013.6769%200.362753L7.72812%206.86916C7.31246%207.32379%207.34404%208.02931%207.79867%208.44498C8.25332%208.86064%208.95882%208.82906%209.37449%208.37443L13.3846%203.98832V20.4487C13.3846%2021.0647%2013.884%2021.5641%2014.5%2021.5641C15.116%2021.5641%2015.6154%2021.0647%2015.6154%2020.4487V3.98832L19.6256%208.37443C20.0413%208.82906%2020.7468%208.86064%2021.2014%208.44498C21.656%208.02931%2021.6876%207.32379%2021.2719%206.86916L15.3232%200.362753Z'%20fill='white'/%3e%3cpath%20d='M2.23077%2018.9611C2.23077%2018.3451%201.7314%2017.8457%201.11539%2017.8457C0.499381%2017.8457%207.79212e-07%2018.3451%207.79212e-07%2018.9611V19.0427C-2.89644e-05%2021.0766%20-5.88145e-05%2022.7159%200.173287%2024.0053C0.353265%2025.3439%200.738281%2026.4709%201.63344%2027.366C2.52861%2028.2613%203.6557%2028.6463%204.99432%2028.8263C6.28366%2028.9995%207.92301%2028.9995%209.95686%2028.9995H19.0432C21.0771%2028.9995%2022.7164%2028.9995%2024.0058%2028.8263C25.3444%2028.6463%2026.4713%2028.2613%2027.3666%2027.366C28.2618%2026.4709%2028.6468%2025.3439%2028.8267%2024.0053C29%2022.7159%2029%2021.0766%2029%2019.0427V18.9611C29%2018.3451%2028.5006%2017.8457%2027.8846%2017.8457C27.2686%2017.8457%2026.7692%2018.3451%2026.7692%2018.9611C26.7692%2021.0958%2026.7669%2022.5846%2026.6159%2023.708C26.4691%2024.7993%2026.2008%2025.3771%2025.7892%2025.7887C25.3775%2026.2004%2024.7998%2026.4687%2023.7085%2026.6155C22.5851%2026.7664%2021.0962%2026.7688%2018.9615%2026.7688H10.0385C7.90375%2026.7688%206.4149%2026.7664%205.29156%2026.6155C4.20032%2026.4687%203.62243%2026.2004%203.21084%2025.7887C2.79924%2025.3771%202.53088%2024.7993%202.38417%2023.708C2.23313%2022.5846%202.23077%2021.0958%202.23077%2018.9611Z'%20fill='white'/%3e%3c/svg%3e"
                alt=""
              />
              <p className="text-white text-sm">Upload your image</p>
            </label>
          </div>
        </div>

        <div className="md:ml-10 ld:ml-0 w-full max-w-md rounded-3xl overflow-hidden">
          <img src={img || "bg_remove.png"} alt={title} />
        </div>
      </section>

      {/* Tool UI */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="rounded-2xl border border-gray-200 bg-linear-to-br from-white via-white to-gray-50/80 shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Try Now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Upload box */}
            <button
              type="button"
              className="group relative flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-xl bg-white/80 px-6 py-10 text-center hover:border-violet-400 hover:bg-violet-50/60 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 group-hover:bg-violet-200 transition-colors">
                <span className="text-xl">⬆️</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Drop your image here or click to upload
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: JPG, PNG · Max 10MB
                </p>
              </div>
              <span className="mt-3 inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-violet-600 text-white group-hover:scale-105 group-hover:bg-violet-700 transition-transform duration-300">
                {uploadLabel}
              </span>
            </button>

            {/* Preview placeholder */}
            <div className="relative border rounded-xl bg-white/90 p-5 md:p-6 flex flex-col items-center justify-center text-center text-sm text-gray-500 shadow-sm">
              <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-sm">
                Output image will show here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-4 lg:mx-44 py-10 xl:py-15">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
          How it works?
        </h2>

        <div className="flex items-start flex-nowrap gap-4 mt-6 xl:mt-10 justify-center">
          {/* Step 1 */}
          <div className="flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
            <img
              className="max-w-9"
              src="data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2022C0%2011.6291%20-2.6226e-07%206.44365%203.22183%203.22183C6.44365%20-2.6226e-07%2011.6291%200%2022%200C32.3708%200%2037.5564%20-2.6226e-07%2040.7781%203.22183C44%206.44365%2044%2011.6291%2044%2022C44%2032.3708%2044%2037.5564%2040.7781%2040.7781C37.5564%2044%2032.3708%2044%2022%2044C11.6291%2044%206.44365%2044%203.22183%2040.7781C-2.6226e-07%2037.5564%200%2032.3708%200%2022ZM22%2034.65C22.9112%2034.65%2023.65%2033.9112%2023.65%2033V21.5835L27.4333%2025.3667C28.0777%2026.011%2029.1223%2026.011%2029.7667%2025.3667C30.411%2024.7223%2030.411%2023.6777%2029.7667%2023.0333L23.1667%2016.4333C22.8573%2016.1238%2022.4376%2015.95%2022%2015.95C21.5624%2015.95%2021.1427%2016.1238%2020.8333%2016.4333L14.2333%2023.0333C13.5889%2023.6777%2013.5889%2024.7223%2014.2333%2025.3667C14.8776%2026.011%2015.9224%2026.011%2016.5667%2025.3667L20.35%2021.5835V33C20.35%2033.9112%2021.0888%2034.65%2022%2034.65ZM13.2%2012.65C12.2887%2012.65%2011.55%2011.9113%2011.55%2011C11.55%2010.0887%2012.2887%209.35%2013.2%209.35H30.8C31.7112%209.35%2032.45%2010.0887%2032.45%2011C32.45%2011.9113%2031.7112%2012.65%2030.8%2012.65H13.2Z'%20fill='url(%23paint0_linear_6505_459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6505_459'%20x1='22'%20y1='0'%20x2='22'%20y2='44'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237C48FE'/%3e%3cstop%20offset='1'%20stop-color='%23C849F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              alt=""
            />
            <div>
              <p className="text-xl font-medium">Upload image</p>
              <p className="text-sm text-neutral-500 mt-1">
                {steps?.[0] ||
                  "Upload your image from your device to get started."}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
            <img
              className="max-w-9"
              src="data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='44'%20height='44'%20rx='11'%20fill='url(%23paint0_linear_6505_476)'/%3e%3crect%20x='12'%20y='9'%20width='21'%20height='3.5'%20rx='1.75'%20fill='white'/%3e%3crect%20x='17.045'%20y='16'%20width='18.8888'%20height='3.14813'%20rx='1.57407'%20transform='rotate(47.0582%2017.045%2016)'%20fill='white'/%3e%3crect%20x='14'%20y='29.8926'%20width='18.8888'%20height='3.14813'%20rx='1.57407'%20transform='rotate(-42.9418%2014%2029.8926)'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6505_476'%20x1='22'%20y1='0'%20x2='22'%20y2='44'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237F48FD'/%3e%3cstop%20offset='1'%20stop-color='%23C448F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              alt=""
            />
            <div>
              <p className="text-xl font-medium">Our AI will Work</p>
              <p className="text-sm text-neutral-500 mt-1">
                {steps?.[1] ||
                  "Our AI automatically removes the background in seconds."}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
            <img
              className="max-w-9"
              src="data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44%2022C44%2032.3709%2044%2037.5564%2040.7782%2040.7782C37.5564%2044%2032.3709%2044%2022%2044C11.6292%2044%206.44358%2044%203.2219%2040.7782C0%2037.5564%200%2032.3709%200%2022C0%2011.6292%200%206.44358%203.2219%203.2219C6.44358%200%2011.6292%200%2022%200C32.3709%200%2037.5564%200%2040.7782%203.2219C44%206.44358%2044%2011.6292%2044%2022ZM22%209.35C21.0888%209.35%2020.35%2010.0888%2020.35%2011V22.4165L16.5667%2018.6333C15.9223%2017.989%2014.8777%2017.989%2014.2333%2018.6333C13.589%2019.2777%2013.589%2020.3223%2014.2333%2020.9667L20.8333%2027.5667C21.1427%2027.8762%2021.5624%2028.05%2022%2028.05C22.4376%2028.05%2022.8573%2027.8762%2023.1667%2027.5667L29.7667%2020.9667C30.4111%2020.3223%2030.4111%2019.2777%2029.7667%2018.6333C29.1224%2017.989%2028.0776%2017.989%2027.4333%2018.6333L23.65%2022.4165V11C23.65%2010.0888%2022.9112%209.35%2022%209.35ZM30.8%2031.35C31.7113%2031.35%2032.45%2032.0887%2032.45%2033C32.45%2033.9113%2031.7113%2034.65%2030.8%2034.65H13.2C12.2888%2034.65%2011.55%2033.9113%2011.55%2033C11.55%2032.0887%2012.2888%2031.35%2013.2%2031.35L30.8%2031.35Z'%20fill='url(%23paint0_linear_6505_460)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6505_460'%20x1='22'%20y1='44'%20x2='22'%20y2='0'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237C48FE'/%3e%3cstop%20offset='1'%20stop-color='%23C849F8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              alt=""
            />
            <div>
              <p className="text-xl font-medium">Download image</p>
              <p className="text-sm text-neutral-500 mt-1">
                {steps?.[2] ||
                  "Download your high-quality image with a clean background."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold mb-6 bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
          Perfect for
        </h2>

        <p className="text-sm md:text-base text-gray-500 mb-6 max-w-2xl md:text-left text-center">
          Designed for creators, professionals, and businesses who need clean
          images in just a few clicks.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-violet-50 text-violet-600 text-xs font-medium px-3 py-1 group-hover:bg-violet-100">
                {/* Tiny dot indicator */}
                <span className="mr-2 h-2 w-2 rounded-full bg-violet-500" />
                Use case
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                {useCase.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {useCase.description}
              </p>

              <div className="mt-4 text-[11px] font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more →
              </div>

              {/* Subtle gradient border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-violet-200/40 via-transparent to-fuchsia-200/40" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold mb-6 bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <p className="text-sm md:text-base text-gray-500 mb-8 max-w-2xl text-center md:text-left">
          Answers to common questions about how our tools work, usage limits,
          and more.
        </p>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="group border border-gray-200 rounded-xl p-5 bg-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500 group-hover:bg-violet-600 transition-colors"></span>
                {faq.question}
              </h3>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Other tools */}
      <section className="max-w-6xl mx-auto border-t border-gray-200 pt-12 mb-20 px-4">
        <h2 className="text-center md:text-left text-xl md:text-2xl font-semibold mb-6 bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
          Other free AI tools on ImageFix
        </h2>

        <ul className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base">
          {[
            { href: "/bg-remover", label: "Background Remover" },
            { href: "/upscale", label: "Image Upscaler" },
            { href: "/uncrop", label: "AI Uncrop" },
            { href: "/cleanup", label: "Cleanup Tool" },
            { href: "/remove-text", label: "Remove Text" },
            { href: "/replace-background", label: "Replace Background" },
          ].map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700 transition-all duration-300 shadow-sm"
              >
                {/* Dot indicator for branding consistency */}
                {/* <span className="h-2 w-2 rounded-full bg-violet-500"></span> */}
                {tool.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="py-5 sm:mb-5 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
          Customer Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700"
            >
              <p className="text-4xl text-gray-500">”</p>

              <p className="text-sm text-gray-500 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 mt-5">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.jobTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
