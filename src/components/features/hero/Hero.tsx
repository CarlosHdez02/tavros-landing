import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hari from "@/assets/hari.avif";
import { ArrowRight, Compass } from "lucide-react";

export default function Hero() {
  return (
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
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center gap-8 max-w-5xl">
        {/* Small decorative element */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#E8B44F]" />
          <div className="w-2 h-2 rotate-45 border border-[#E8B44F] bg-[#E8B44F]/20" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#E8B44F]" />
        </div>

        {/* Main Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none">
            Forja tu
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#E8B44F] tracking-tight leading-none drop-shadow-[0_0_30px_rgba(232,180,79,0.5)]">
            Legado
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-zinc-200 font-light tracking-wide max-w-2xl leading-relaxed mt-4">
          Donde la fuerza de elite acompaña tu viaje hacia la excelencia
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-gradient-to-r from-[#E8B44F] to-[#d4a043] hover:from-[#ffcd69] hover:to-[#E8B44F] text-black font-bold text-lg tracking-wide hover:scale-105 hover:shadow-[0_0_30px_-5px_#E8B44F] active:scale-95 transition-all duration-300 flex items-center gap-3 group">
            Empezar mi viaje
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent border-2 border-white/30 backdrop-blur-sm text-white font-semibold text-lg tracking-wide hover:bg-white/10 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group">
            Explorar Tavros
            <Compass className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
          </Button>
        </div>

        {/* Bottom decorative accent */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#E8B44F]/50 to-transparent" />
      </div>
    </Card>
  );
}
