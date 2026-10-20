import { faqs } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

export const metadata = { title: "FAQ — Aera / 01", description: "Frequently asked questions about Aera / 01." };
export default function FaqPage() { return <Container className="py-20"><SectionHeading title="Questions, answered plainly." description="Keep this page practical. It is one of the best places to remove hesitation before a purchase." /><div className="mt-16 max-w-3xl space-y-12">{faqs.map((group) => <section key={group.category}><h2 className="mb-5 font-display text-2xl">{group.category}</h2><Accordion items={group.items} /></section>)}</div></Container>; }
