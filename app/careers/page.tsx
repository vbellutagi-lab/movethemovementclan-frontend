import type { Metadata } from "next";
import { Careers } from "../_components/Careers";

export const metadata: Metadata = {
  title: "Careers — Move",
  description: "Join the clan. Open coaching and front-desk roles at Move.",
};

export default function CareersPage() {
  return <Careers />;
}
