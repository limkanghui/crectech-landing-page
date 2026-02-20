import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "CRecTech's proprietary CRecREF™ catalyst converts raw biogas directly to bio-methanol in 2 steps instead of 4, cutting production costs by 50%.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
