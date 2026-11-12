import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Globe2, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Ages 7–18",
    description: "Structured Paths",
  },
  {
    icon: Users,
    title: "1:6 Ratio",
    description: "Micro-Cohorts",
  },
  {
    icon: Globe2,
    title: "Dual Curriculum",
    description: "Nigeria & UK",
  },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#06352B] to-[#04241E] text-white">
      <div className="relative mx-auto grid min-h-[540px] max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-24 pt-16 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-16 lg:pb-28 lg:pt-12">

        {/* LEFT: TEXT AND CONTENT */}
        <div className="relative z-20 max-w-[620px]">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em]">
            <span className="block whitespace-nowrap">
              Learn to Code.
            </span>

            <span className="block whitespace-nowrap">
              Explore AI.
            </span>

            <span className="block whitespace-nowrap bg-gradient-to-r from-[#B6E04A] to-[#D5F56D] bg-clip-text text-transparent">
              Create the Future.
            </span>
          </h1>

          <p className="mt-5 max-w-[440px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Give your child the skills to explore technology,
            solve problems, and turn creative ideas into real projects.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#programmes"
              className="inline-flex items-center gap-2 rounded-full bg-[#075C4C] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#08705B] sm:text-sm"
            >
              Explore Our Programmes
              <ArrowRight size={15} />
            </Link>

            <Link
              href="#enrol"
              className="rounded-full bg-[#FF852E] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-[#F8751C] sm:text-sm"
            >
              Enrol your child
            </Link>
          </div>

          {/* FEATURE CARDS */}
          <div className="mt-8 grid max-w-[465px] grid-cols-3 gap-2 sm:gap-2.5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex min-h-[78px] min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-2.5 py-3 sm:gap-2.5 sm:px-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#08745D]/50 text-[#75D9B5]">
                    <Icon size={14} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[10px] font-bold leading-4 text-white sm:text-[11px]">
                      {feature.title}
                    </h3>

                    <p className="text-[9px] leading-3.5 text-white/60 sm:text-[10px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: STUDENTS IMAGE */}
        <div className="relative z-10 mx-auto w-full max-w-[700px] lg:-mb-28 lg:self-end lg:origin-bottom-right lg:translate-x-12 lg:scale-[1.3] xl:translate-x-20">
          <div className="relative aspect-[1/1] w-full">
            <Image
              src="/images/hero-students.webp"
              alt="Two young learners exploring technology with their laptops"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* CURVED WHITE DIVIDER */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full">
        <svg
          viewBox="0 0 1440 75"
          preserveAspectRatio="none"
          className="block h-[42px] w-full sm:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25 C260 75 450 5 720 30 C1000 55 1190 75 1440 20 L1440 75 L0 75 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}