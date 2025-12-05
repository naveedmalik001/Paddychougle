export default function MediaKitCTA() {
    return (
        <section className="py-16 md:py-24 bg-gold text-charcoal relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full mix-blend-overlay -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Interested in Collaboration?</h2>
                <p className="text-charcoal/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                    Download my full media kit to see detailed stats, audience demographics, and past partnership case studies.
                </p>
                <a
                    href="/media-kit.pdf"
                    download
                    className="inline-block px-10 py-5 bg-charcoal text-white font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                    Download Media Kit (PDF)
                </a>
            </div>
        </section>
    );
}
