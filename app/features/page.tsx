import Image from "next/image";
import { features } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/animated";

export const metadata = { title: "Features — Aera / 01", description: "A deeper look at the features of Aera / 01." };
export default function FeaturesPage() { return <Container className="py-20"><SectionHeading title="Details worth slowing down for." description="Placeholder feature copy. Use this page to explain the thinking behind the product, not just list benefits." /> <div className="mt-20 grid gap-24">{features.map((feature, i) => <Reveal key={feature.title} className="grid items-center gap-10 lg:grid-cols-2"><div className={i % 2 ? "lg:order-2" : ""}><Image src={feature.image} alt={`${feature.title} placeholder`} width={900} height={900} className="rounded-[2rem]" /></div><div className={i % 2 ? "lg:order-1" : ""}><p className="eyebrow">Feature / 0{i + 1}</p><h2 className="mt-4 font-display text-4xl tracking-[-.05em] sm:text-5xl">{feature.title}</h2><p className="mt-5 max-w-lg text-lg leading-8 text-muted">{feature.text}</p></div></Reveal>)}</div></Container>; }
