import { MapPin, PhoneIcon, MailIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function FooterContact() {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-serif text-zinc-200 mb-2">
          Contacto
        </CardTitle>
        <div className="w-12 h-px bg-gradient-to-r from-[#E8B44F] to-transparent" />
      </CardHeader>
      <CardContent className="flex flex-col gap-5 px-0">
        <div className="flex items-start gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-[#E8B44F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E8B44F]/10 group-hover:border-[#E8B44F]/40 transition-all duration-300">
            <MapPin size={18} className="text-[#E8B44F]" />
          </div>
          <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors duration-300">
            P.º Lomas Altas 292-Interior 26, Lomas Altas, 45128 Zapopan, Jal.
          </p>
        </div>

        <Link
          href="tel:+523337499028"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-[#E8B44F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E8B44F]/10 group-hover:border-[#E8B44F]/40 transition-all duration-300">
            <PhoneIcon size={18} className="text-[#E8B44F]" />
          </div>
          <p className="text-zinc-400 group-hover:text-[#E8B44F] transition-colors duration-300">
            +52 33 3749 9028
          </p>
        </Link>

        <Link
          href="mailto:carlos.toro@tavrosfuerza.com"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-[#E8B44F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E8B44F]/10 group-hover:border-[#E8B44F]/40 transition-all duration-300">
            <MailIcon size={18} className="text-[#E8B44F]" />
          </div>
          <p className="text-zinc-400 group-hover:text-[#E8B44F] transition-colors duration-300 break-all">
            carlos.toro@tavrosfuerza.com
          </p>
        </Link>
      </CardContent>
    </Card>
  );
}
