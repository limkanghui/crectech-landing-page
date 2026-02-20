import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "CRecTech press coverage and milestones — featured in Forbes, CNBC, The Business Times, and Manifold Times.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
