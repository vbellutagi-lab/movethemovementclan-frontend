import type { Metadata } from "next";
import { PrivacyPolicy } from "../_components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — Move",
  description:
    "How Move, The Movement Clan handles your personal information when you use this website.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
