import WhatsAppCTA from "@/components/action-whatsapp/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import { whatsappMesage } from "@/config/whatsapp";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ onClose, open }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="z-10 backdrop-blur-md absolute left-0 top-16 w-full bg-black/95 border-t border-[#E8B44F]/20 md:hidden shadow-2xl">
      <nav className="flex flex-col gap-4 p-6">
        {/* Navigation Links */}
        <Link
          href="/#testimonials"
          onClick={onClose}
          className="flex items-center justify-center text-zinc-200 hover:text-[#E8B44F] font-medium text-lg transition-colors duration-300 py-2"
        >
          Testimonios
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8B44F]/30 to-transparent" />
        </div>

        {/* CTA Button */}
        <WhatsAppCTA message={whatsappMesage.hero} onClick={onClose}>
          <Button className="w-full h-12 px-6 rounded-xl text-black font-bold text-base tracking-wide bg-gradient-to-r from-[#E8B44F] to-[#d4a043] hover:from-[#ffcd69] hover:to-[#E8B44F] hover:shadow-[0_0_20px_-5px_#E8B44F] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
          </Button>
        </WhatsAppCTA>
      </nav>
    </div>
  );
}
