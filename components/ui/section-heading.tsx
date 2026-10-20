export function SectionHeading({ title, description, align = "left" }: { title: string; description?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}><h2 className="font-display text-4xl font-medium tracking-[-.045em] text-ink sm:text-5xl">{title}</h2>{description && <p className="mt-5 max-w-xl text-base leading-7 text-muted">{description}</p>}</div>;
}
