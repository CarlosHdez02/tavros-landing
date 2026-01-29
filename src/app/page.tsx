import Footer from "@/components/features/footer/Footer";
import Navbar from "@/components/features/navbar/Navbar";
import PromotionCards from "@/components/features/promotion-cards/Promotion-cards";
import Testimonials from "@/components/features/testimonials/Testimonials";
import Image from "next/image";
import ActionEmail from "@/components/features/action-email/ActionWhatsAppCall";
import tavrosLogo from "@/assets/tavros_logo.jpeg";
import Philosophy from "@/components/features/philosophy/Philosopy";
import Hero from "@/components/features/hero/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen w-full flex flex-col bg-black">
      {/* Header Section - Floating transparent header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#E8B44F]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src={tavrosLogo}
              alt="Tavros Logo"
              width={70}
              height={70}
              className="rounded-full ring-2 ring-[#E8B44F]/30 relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <Navbar />
        </div>
      </div>

      {/* Hero Section - Full bleed, no container */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Philosophy & Promotion Section - Gradient with border accent */}
      <section className="w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24 border-y border-[#E8B44F]/20 relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-[#E8B44F]/5 opacity-50" />

        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#E8B44F] to-transparent" />

        <div className="container mx-auto px-4 flex flex-col gap-16 relative z-10">
          <Philosophy />
          <PromotionCards />
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#E8B44F] to-transparent" />
      </section>

      {/* Testimonials Section - Darker with subtle pattern */}
      <section className="w-full bg-black py-24 relative">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,180,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,180,79,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Radial gradient accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8B44F]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <Testimonials />
        </div>
      </section>

      <section className="w-full">
        <ActionEmail />
      </section>
      {/* Footer Section - Solid dark with top border */}
      <div className="bg-zinc-950 border-t border-[#E8B44F]/20 relative">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#E8B44F]/50 to-transparent" />

        <div className="container mx-auto px-4 py-16">
          <Footer />
        </div>
      </div>
    </main>
  );
}
