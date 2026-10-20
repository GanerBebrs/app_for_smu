import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
export default function NotFound() { return <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center"><p className="eyebrow">404 / Not found</p><h1 className="mt-5 font-display text-7xl tracking-[-.08em]">This page wandered off.</h1><p className="mt-5 max-w-md text-muted">The link may be old, or this page is still a sketch on the workbench.</p><Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-canvas"><ArrowLeft size={16} /> Back home</Link></Container>; }
