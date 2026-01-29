import { whatsappPhone } from "@/config/whatsapp";
import { buildWhatsAppUrl } from "@/lib/urls";

export const useWhatsApp = (message: string) => {
  return buildWhatsAppUrl(whatsappPhone, message);
};
