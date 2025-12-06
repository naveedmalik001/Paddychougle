import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-charcoal">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 z-10">
                    <div className="inline-block px-3 py-1 border border-gold/30 rounded-full">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">
                            Available for Booking 2025
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.9]">
                        Define <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted">Your Vision</span>
                    </h1>

                    <p className="text-muted text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-gold/50 pl-6">
                        Professional fitness model and actor acting as the catalyst for your brand&apos;s visual identity.
                        Delivering cinematic presence and athletic precision.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#work" className="group px-8 py-4 bg-gold text-charcoal font-bold uppercase tracking-wider hover:bg-white transition-all transform hover:-translate-y-1">
                            View Selected Work
                        </a>
                        <a href="#contact" className="group px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-all flex items-center gap-2">
                            Contact Me <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                        </a>
                    </div>
                </div>

                <div className="relative h-[500px] md:h-[700px] w-full bg-white/5 rounded-lg overflow-hidden md:-ml-8 lg:-ml-0 border border-white/5 shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-charcoal/20 z-10" />
                    {/* Fallback color if image missing */}
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" />

                    <Image
                        src="/images/862af06f-63f5-406a-99c6-40a7a3e0f888.jpeg"
                        alt="Paddy Chougule Professional Portfolio"
                        fill
                        className="object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
