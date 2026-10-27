"use client";

import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

const list = [
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
  "/partners/4.png",
  "/partners/5.webp",
  "/partners/6.svg",
  "/partners/7.png",
  "/partners/8.png",
];

export default function Partners() {
  const { isAr } = useI18n();

  return (
    <section
      id="partners"
      className="border-y border-[#e8eaed] py-12 text-white lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-7">
          <div className="section-badge mb-3">
            <span className="badge-dot" />
            <span>{isAr ? "الشركاء" : "PARTNERS"}</span>
          </div>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {isAr ? "شركاؤنا" : "Our Partners"}
          </h2>
        </div>

        <div className="grid grid-cols-2 border border-[#e8eaed] sm:grid-cols-3 lg:grid-cols-4">
          {list.map((item, idx) => (
            <div
              key={item}
              className="
                flex min-h-28 items-center justify-center
                border-b border-r border-[#e8eaed]
                p-6
                sm:min-h-32

                [&:nth-child(2n)]:border-r-0
                [&:nth-child(n+9)]:border-b-0

                sm:[&:nth-child(2n)]:border-r
                sm:[&:nth-child(3n)]:border-r-0
                sm:[&:nth-child(n+7)]:border-b-0

                lg:[&:nth-child(3n)]:border-r
                lg:[&:nth-child(4n)]:border-r-0
                lg:[&:nth-child(n+9)]:border-b-0
              "
            >
              <Image
                src={item}
                width={150}
                height={70}
                alt={`Partner ${idx + 1}`}
                className={`
                  max-h-14
                  w-auto
                  object-contain
                  ${idx === 8 ? "brightness-0 invert" : "brightness-0"}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
