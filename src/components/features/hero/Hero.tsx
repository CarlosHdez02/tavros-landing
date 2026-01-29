import { Card } from "@/components/ui/card";
import hari from "@/assets/hari.avif";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Banner */}
      <Card className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-none rounded-none shadow-none">
        {/* Background Image with Overlay */}
        <div
          style={{
            backgroundImage: `url(${hari.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        />

        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

        {/* Gold accent glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8B44F]/10 via-transparent to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 max-w-5xl">
          {/* Small decorative element */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#E8B44F]" />
            <div className="w-2 h-2 rotate-45 border border-[#E8B44F] bg-[#E8B44F]/20" />
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#E8B44F]" />
          </div>

          {/* Main Heading */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none">
              Forja tu
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#E8B44F] tracking-tight leading-none drop-shadow-[0_0_30px_rgba(232,180,79,0.5)]">
              Legado
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-light tracking-wide max-w-2xl leading-relaxed mt-2 sm:mt-4 px-4">
            Donde la fuerza de elite acompaña tu viaje hacia la excelencia
          </p>

          {/* Bottom decorative accent */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 w-px h-12 sm:h-16 bg-gradient-to-b from-[#E8B44F]/50 to-transparent" />
        </div>
      </Card>

      {/* WhatsApp CTA Section */}
    </section>
  );
}
