import FooterContact from "./Footer.contact";
import FooterNavigation from "./Footer.navigation";
import FooterTavros from "./Footer.tavros";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Decorative top line */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#E8B44F] to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <FooterTavros />
        <FooterNavigation />
        <FooterContact />
      </div>

      {/* Bottom copyright section */}
      <div className="mt-12 pt-8 border-t border-zinc-800/50">
        <p className="text-center text-zinc-600 text-sm">
          © 2026 Tavros. Todos los derechos reservados. Por Ætherml
        </p>
      </div>
    </footer>
  );
}
