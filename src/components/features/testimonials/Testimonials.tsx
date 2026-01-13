import { Card } from "../../ui/card";
import { testimonials } from "@/lib/testimonials";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-16 relative">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-6">
        {/* Decorative top element */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#E8B44F]" />
          <div className="w-2 h-2 rotate-45 border border-[#E8B44F] bg-[#E8B44F]/20" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#E8B44F]" />
        </div>

        <h2 className="text-4xl md:text-5xl text-center text-[#E8B44F] font-serif tracking-wider">
          El Legado Se Forja Aquí
        </h2>

        <p className="text-zinc-400 text-center text-lg max-w-2xl">
          Historias reales de transformación y poder
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className="h-full border-none shadow-none bg-transparent"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Testimonial testimonial={testimonial} />
          </Card>
        ))}
      </div>
    </div>
  );
}
