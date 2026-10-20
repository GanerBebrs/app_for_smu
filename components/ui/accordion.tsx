"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="divide-y divide-white/10 border-y border-white/10">{items.map((item, index) => <div key={item.q}><button className="flex w-full items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" onClick={() => setOpen(open === index ? null : index)}><span className="font-medium">{item.q}</span><Plus className={`text-accent transition ${open === index ? "rotate-45" : ""}`} size={20} /></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="max-w-2xl pb-5 leading-7 text-muted">{item.a}</p></motion.div>}</AnimatePresence></div>)}</div>;
}
