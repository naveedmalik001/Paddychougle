import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Gallery / Images */}
                <div className="relative h-[600px] w-full hidden lg:block">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/5 rounded-lg overflow-hidden border border-white/5 z-0 transform translate-x-4 -translate-y-4">
                        <Image
                            src="/images/IMG_20251115_180627.jpg"
                            alt="Professional Modeling Session"
                            fill
                            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-white/10 rounded-lg overflow-hidden border border-white/5 z-10 shadow-2xl">
                        <Image
                            src="/images/FullSizeRender (309).jpg"
                            alt="Professional Photography"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <span className="text-gold uppercase tracking-widest font-bold text-sm">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        More Than Just <br />
                        An <span className="text-muted">Image.</span>
                    </h2>
                    <p className="text-muted/80 text-lg leading-relaxed">
                        With over 5 years in the industry, I bring a unique blend of athletic discipline and artistic expression to every project. My background in competitive sports allows me to execute dynamic movements with precision, while my acting training ensures emotional authenticity.
                    </p>
                    <p className="text-muted/80 text-lg leading-relaxed">
                        I don&apos;t just pose; I perform. Whether it&apos;s a high-energy fitness campaign or a subtle lifestyle shoot, I work collaboratively with directors and photographers to capture the perfect frame.
                    </p>

                    <div className="pt-8 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-bold text-xl mb-2">Philosophy</h4>
                            <p className="text-sm text-muted">Authenticity above all. Every movement has a purpose.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-2">Focus</h4>
                            <p className="text-sm text-muted">Fitness, Commercial, Lifestyle, and Fashion.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
