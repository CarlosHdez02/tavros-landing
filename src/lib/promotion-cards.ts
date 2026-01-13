import { PromottionCardsInterface } from "@/types/promotion-cards.type";
import { DumbbellIcon, FlaskConicalIcon, UsersIcon } from "lucide-react";
export const promotionCards: PromottionCardsInterface[] = [
  {
    id: 1,
    title: "Tiempos ancestrales",
    description:
      "Los pesos libres, magnesia y trabajo duro, metodos probados para resultados reales",
    Icon: DumbbellIcon,
  },
  {
    id: 2,
    title: "Ciencia moderna",
    description:
      "Programas respaldados por horas de investigacion y resultados probados",
    Icon: FlaskConicalIcon,
  },
  {
    id: 3,
    title: "Hermandad de elite",
    description: "Unete a nuestra familia tavros",
    Icon: UsersIcon,
  },
];
