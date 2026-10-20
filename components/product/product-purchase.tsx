"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { product } from "@/lib/content";

export function ProductPurchase() {
  const [color, setColor] = useState(product.accent); const [size, setSize] = useState("Standard");
  return <div className="space-y-7"><div className="flex items-end justify-between"><div><p className="text-sm text-muted">Starting at</p><p className="mt-1 font-display text-4xl">{product.price}</p></div><span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Pre-order open</span></div><div><p className="mb-3 text-sm font-semibold">Color</p><div className="flex gap-2">{["Lime / 01", "Stone / 02", "Night / 03"].map((item) => <button key={item} onClick={() => setColor(item)} className={`rounded-full border px-4 py-2 text-sm ${color === item ? "border-accent bg-accent/10 text-accent" : "border-white/15 text-muted"}`}>{item}</button>)}</div></div><div><p className="mb-3 text-sm font-semibold">Size</p><div className="flex gap-2">{["Standard", "Compact"].map((item) => <button key={item} onClick={() => setSize(item)} className={`rounded-full border px-4 py-2 text-sm ${size === item ? "border-accent bg-accent/10 text-accent" : "border-white/15 text-muted"}`}>{item}</button>)}</div></div><Button onClick={() => alert(`TODO: connect checkout for ${color}, ${size}.`)} className="w-full justify-center">Buy now / Pre-order</Button><p className="text-center text-xs text-muted">No payment is taken in this placeholder flow.</p></div>;
}
