import tavrosLogo from "@/assets/tavros_logo.jpeg";
import Image from "next/image";
import { InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FooterTavros() {
  return (
    <Card className="flex flex-col border-none bg-transparent shadow-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#E8B44F]/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src={tavrosLogo}
              alt="Tavros Logo"
              width={56}
              height={56}
              className="rounded-full ring-2 ring-[#E8B44F]/20 relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-2xl font-serif text-[#E8B44F] tracking-wide">
            Tavros
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 px-0">
        <p className="text-zinc-400 leading-relaxed text-base">
          Forjando excelencia estética y fuerza para hombres y mujeres de poder
        </p>

        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/tavrosfuerza/?hl=es"
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#E8B44F]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-full bg-zinc-900/50 border border-[#E8B44F]/20 flex items-center justify-center group-hover:bg-[#E8B44F]/10 group-hover:border-[#E8B44F]/40 transition-all duration-300 group-hover:scale-110">
              <InstagramIcon size={20} className="text-[#E8B44F]" />
            </div>
          </Link>

          <Link
            href="https://www.youtube.com/@tavrosfuerza"
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#E8B44F]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-full bg-zinc-900/50 border border-[#E8B44F]/20 flex items-center justify-center group-hover:bg-[#E8B44F]/10 group-hover:border-[#E8B44F]/40 transition-all duration-300 group-hover:scale-110">
              <YoutubeIcon size={20} className="text-[#E8B44F]" />
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
