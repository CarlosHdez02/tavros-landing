import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function ActionEmail() {
  return (
    <Card className=" relative flex flex-col justify-center max-w-4xl mx-auto w-full border-2 border-[#E8B44F]/20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 shadow-2xl overflow-hidden group">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8B44F]/10 via-transparent to-[#E8B44F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#E8B44F] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#E8B44F] to-transparent" />

      <CardHeader className="relative z-10 pt-16 pb-4 px-6">
        <CardTitle className="text-left text-5xl md:text-6xl font-serif tracking-wider text-[#E8B44F] drop-shadow-[0_0_15px_rgba(232,180,79,0.3)] whitespace-nowrap">
          EL ACERO TE ESPERA
        </CardTitle>

        {/* Decorative underline */}

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#E8B44F]" />
          <div className="w-2 h-2 rotate-45 border border-[#E8B44F]" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#E8B44F]" />
        </div>
      </CardHeader>

      <CardContent className="w-full flex flex-col gap-10 px-8 py-12 relative z-10">
        <h2 className="text-center text-zinc-300 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          No esperes por más motivación. Cultiva la disciplina necesaria para
          comenzar tu nueva era de poder.
        </h2>

        <div className="flex flex-col md:flex-row items-stretch gap-4 w-full max-w-2xl mx-auto">
          <Input
            className="flex-1 h-16 bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 rounded-2xl px-7 text-lg focus-visible:ring-2 focus-visible:ring-[#E8B44F]/50 focus-visible:border-[#E8B44F] transition-all duration-300"
            type="email"
            placeholder="tu@correo.com"
          />

          <Button className="cursor-pointer md:w-auto h-16 px-10 rounded-2xl text-black font-bold text-lg tracking-wider bg-gradient-to-r from-[#E8B44F] to-[#d4a043] hover:from-[#ffcd69] hover:to-[#E8B44F] hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_#E8B44F] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group/btn">
            RECLAMAR
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8B44F] animate-pulse" />
          <p className="text-center text-zinc-500 text-sm uppercase tracking-[0.2em] font-medium">
            Cupos limitados para esta temporada
          </p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8B44F] animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}
