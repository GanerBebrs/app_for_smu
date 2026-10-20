import { product } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Lightbox } from "@/components/ui/lightbox";

export const metadata = { title: "Gallery — Aera / 01", description: "A visual gallery for Aera / 01." };
export default function GalleryPage() { return <Container className="py-20"><SectionHeading title="See it in its element." description="Replace these placeholders with your own product photography. The lightbox is already wired." /><div className="mt-14"><Lightbox images={[...product.images, ...product.images]} /></div></Container>; }
