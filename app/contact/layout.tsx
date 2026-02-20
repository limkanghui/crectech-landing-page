import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a meeting with CRecTech to explore deployment and partnership opportunities. Reach us at contact@crectech.net.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
