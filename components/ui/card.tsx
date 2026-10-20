export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[.045] p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-accent/30 ${className}`}>{children}</div>;
}
