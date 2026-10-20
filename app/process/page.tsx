import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = { title: "Process — Aera / 01", description: "How Aera / 01 is made." };
export default function ProcessPage() { return <Container className="py-20"><SectionHeading title="From first question to final form." description="A vertical timeline for the making story. Replace each step with your actual materials, partners, and process." /><div className="relative mt-20 ml-4 border-l border-accent/40 pl-10">{processSteps.map(([number, title, text]) => <div key={number} className="relative mb-16 last:mb-0"><span className="absolute -left-[53px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-canvas">{number}</span><p className="eyebrow">{number}</p><h2 className="mt-3 font-display text-4xl">{title}</h2><p className="mt-4 max-w-xl text-lg leading-8 text-muted">{text}</p></div>)}</div></Container>; }
