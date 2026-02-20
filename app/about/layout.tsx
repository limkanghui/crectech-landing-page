import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the CRecTech team — a NUS deep-tech startup backed by Breakthrough Energy, Temasek, and SGInnovate, turning waste biogas into renewable bio-methanol.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
