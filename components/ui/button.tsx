import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; className?: string; onClick?: () => void };
export function Button({ children, href, variant = "primary", className = "", onClick }: Props) {
  const styles = { primary: "bg-accent text-canvas hover:bg-accent-strong", secondary: "border border-white/15 bg-white/[.04] hover:bg-white/[.1]", ghost: "text-muted hover:text-ink" }[variant];
  const content = <span className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}>{children}<ArrowUpRight size={16} /></span>;
  return href ? <Link href={href}>{content}</Link> : <button onClick={onClick} type="button">{content}</button>;
}
