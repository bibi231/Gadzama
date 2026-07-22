import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A photographic gallery of Chief Joe-Kyari Gadzama, OFR, SAN, Senior Advocate of Nigeria and Chartered Arbitrator.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="In Pictures"
        title="Gallery"
        subtitle="Moments from a distinguished career in law, arbitration and public service. Tap any photo to enlarge."
      />

      <section className="bg-bg py-20 lg:py-24">
        <div className="section-container">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
