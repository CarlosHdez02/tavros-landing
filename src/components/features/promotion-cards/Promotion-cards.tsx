import { promotionCards } from "@/lib/promotion-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PromotionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {promotionCards.map((card) => (
        <Card
          key={card.id}
          className="h-full border border-[#E8B44F]/30 bg-black/60 shadow-lg backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300"
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-4 w-full">
                <CardTitle className="text-xl font-serif tracking-in-widest uppercase text-[#E8B44F]">
                  {card.title}
                </CardTitle>
                <hr className="border-[#E8B44F]/50 w-8" />
              </div>
              <card.Icon
                size={32}
                className="text-[#E8B44F]/80 -mt-1 shrink-0"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-muted-foreground font-light leading-relaxed">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
