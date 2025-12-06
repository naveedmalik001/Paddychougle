import { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Photo Gallery | Paddy Chougule - Model & Influencer",
    description: "Browse through Paddy Chougule's professional photo gallery featuring modeling campaigns, fashion shoots, and commercial work.",
    openGraph: {
        title: "Photo Gallery | Paddy Chougule",
        description: "Professional modeling portfolio photo gallery",
        type: "website",
        images: [
            {
                url: "/images/862af06f-63f5-406a-99c6-40a7a3e0f888.jpeg",
                width: 1200,
                height: 900,
                alt: "Paddy Chougule Portfolio",
            },
        ],
    },
    alternates: {
        canonical: "/gallery",
    },
};

export default function GalleryPage() {
    return (
        <>
            <Header />
            <main>
                <section className="py-24 bg-charcoal min-h-screen">
                    <div className="container mx-auto px-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
                            <div>
                                <Link href="/" className="text-gold hover:text-white transition-colors inline-block mb-4">
                                    ← Back to Home
                                </Link>
                                <span className="text-gold uppercase tracking-widest font-bold text-sm">Portfolio</span>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">Photo Gallery</h1>
                                <p className="text-muted mt-4 max-w-2xl">
                                    Explore my complete collection of professional photography, including fashion campaigns,
                                    commercial work, and creative collaborations with leading brands.
                                </p>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <div className="flex items-center gap-4 text-gold font-medium">
                                    <span className="text-2xl">22+</span>
                                    <span className="text-muted text-sm">Photos</span>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Component */}
                        <PhotoGallery />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}