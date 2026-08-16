import { client } from "../data/client";
import { WhatsAppIcon } from "./SocialIcons";

export function WhatsAppButton() {
  const digits = client.centre.whatsapp.replace(/[^\d]/g, "");
  return (
    <a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Move on WhatsApp"
      className="mvWhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
