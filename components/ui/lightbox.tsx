"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export function Lightbox({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return <><div className="columns-1 gap-5 sm:columns-2 lg:columns-3">{images.map((image, index) => <button key={image} onClick={() => setSelected(image)} className="mb-5 block w-full overflow-hidden rounded-[2rem] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Image src={image} alt={`Product placeholder ${index + 1}`} width={900} height={900} className="w-full transition duration-500 hover:scale-105" /></button>)}</div>{selected && <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-canvas/90 p-5 backdrop-blur-xl" onClick={() => setSelected(null)}><button aria-label="Close image" className="absolute right-6 top-6 rounded-full border border-white/15 p-3" onClick={() => setSelected(null)}><X /></button><Image src={selected} alt="Enlarged product placeholder" width={1200} height={1200} className="max-h-[85vh] w-auto max-w-full rounded-[2rem]" /></div>}</>;
}
