"use client";

import Link from "next/link";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, product } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const path = usePathname(); const [open, setOpen] = useState(false); const [light, setLight] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = light ? "light" : "dark"; }, [light]);
  return <header className="sticky top-0 z-40 border-b border-white/5 bg-canvas/70 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"><Link href="/" className="font-display text-lg font-bold tracking-[-.04em]">{product.shortName}<span className="text-accent">/01</span></Link><nav className="hidden items-center gap-5 xl:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className={`text-sm transition ${path === item.href ? "text-accent" : "text-muted hover:text-ink"}`}>{item.label}</Link>)}</nav><div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={() => setLight(!light)} className="hidden rounded-full p-2 text-muted hover:text-ink sm:block">{light ? <Moon size={18} /> : <Sun size={18} />}</button><ShoppingBag size={19} className="mr-2 hidden text-muted sm:block" /><Button href="/product" className="hidden sm:inline-flex">Pre-order</Button><button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded-full border border-white/10 p-2 xl:hidden">{open ? <X size={19} /> : <Menu size={19} />}</button></div></div>{open && <div className="border-t border-white/10 px-5 py-5 xl:hidden"><nav className="grid gap-1">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg text-muted hover:bg-white/5 hover:text-ink">{item.label}</Link>)}</nav></div>}</header>;
}
