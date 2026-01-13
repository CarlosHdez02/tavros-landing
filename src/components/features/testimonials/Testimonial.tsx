import { TestimonialInterface } from "@/types/testimonial.type";
import { QuoteIcon, UserIcon } from "lucide-react";

interface TestimonialProps {
  testimonial: TestimonialInterface;
}
export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-black/50 backdrop-blur-sm p-8 flex flex-col gap-6 h-full border border-[#E8B44F]/10 group hover:border-[#E8B44F]/30 transition-all duration-500 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8B44F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8B44F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-6 h-full">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Glow effect behind avatar */}
            <div className="absolute inset-0 bg-[#E8B44F]/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-full bg-gradient-to-br from-[#E8B44F] to-[#d4a043] p-3 ring-2 ring-[#E8B44F]/20 group-hover:ring-[#E8B44F]/40 transition-all duration-300">
              <UserIcon className="text-black" size={24} />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#E8B44F] font-serif text-xl tracking-wide">
              {testimonial.name}
            </h3>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mt-1">
              {testimonial.trainingHeader}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Opening Quote */}

          {/* Text Content */}
          <p className="text-zinc-300 leading-relaxed text-base px-4 relative z-10">
            {testimonial.testimonial}
          </p>

          {/* Closing Quote */}
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-zinc-800/50 group-hover:border-[#E8B44F]/20 transition-colors duration-500">
          <div className="w-2 h-2 rounded-full bg-[#E8B44F] animate-pulse" />
          <span className="text-xs text-zinc-600 uppercase tracking-widest">
            Testimonio verificado
          </span>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#E8B44F]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
