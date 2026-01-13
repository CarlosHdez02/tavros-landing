import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
export default function FooterNavigation() {
  return (
    <Card className="flex flex-col border-none bg-transparent shadow-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-serif text-zinc-200 mb-2">
          Navegación
        </CardTitle>
        <div className="w-12 h-px bg-gradient-to-r from-[#E8B44F] to-transparent" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 px-0">
        <Link
          href="#"
          className="text-zinc-400 hover:text-[#E8B44F] cursor-pointer transition-colors duration-300 text-base group flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8B44F]/0 group-hover:bg-[#E8B44F] transition-colors duration-300" />
          Programas
        </Link>
        <Link
          href="#"
          className="text-zinc-400 hover:text-[#E8B44F] cursor-pointer transition-colors duration-300 text-base group flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8B44F]/0 group-hover:bg-[#E8B44F] transition-colors duration-300" />
          Nuestros entrenadores
        </Link>
        <Link
          href="#"
          className="text-zinc-400 hover:text-[#E8B44F] cursor-pointer transition-colors duration-300 text-base group flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8B44F]/0 group-hover:bg-[#E8B44F] transition-colors duration-300" />
          Testimonios
        </Link>
      </CardContent>
    </Card>
  );
}
