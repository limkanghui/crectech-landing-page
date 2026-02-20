"use client";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost" | "outline-dark";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer";
  const styles: Record<Variant, string> = {
    primary: `${base} bg-primary text-white animate-cta-pulse hover:bg-primary/90`,
    ghost: `${base} border border-primary text-primary hover:bg-primary/5`,
    "outline-dark": `${base} border border-dark/20 text-dark hover:bg-dark/5`,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={styles[variant] + " " + className}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={styles[variant] + " " + className}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
