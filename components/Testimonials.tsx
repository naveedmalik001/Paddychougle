export default function Testimonials() {
    return (
        <section className="py-24 border-t border-white/5 bg-charcoal">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <span className="text-gold uppercase tracking-widest font-bold text-sm">Testimonials</span>
                <h2 className="text-4xl font-serif font-bold text-white mt-4 mb-16">Words from Directors</h2>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="p-8 bg-white/5 rounded-lg border border-white/5">
                        <p className="text-lg text-gray-300 italic mb-6">&ldquo;Paddy brings an intensity to the set that is contagious. He understands the camera perfectly and needs very little direction to get the shot.&rdquo;</p>
                        <div>
                            <h4 className="text-white font-bold">Sarah Jenkins</h4>
                            <span className="text-muted text-sm">Creative Director, HypeMedia</span>
                        </div>
                    </div>
                    <div className="p-8 bg-white/5 rounded-lg border border-white/5">
                        <p className="text-lg text-gray-300 italic mb-6">&ldquo;Professional, punctual, and versatile. Whether it&apos;s high-fashion or gritty fitness, he adapts his look and energy effortlessly.&rdquo;</p>
                        <div>
                            <h4 className="text-white font-bold">Rahul Sharma</h4>
                            <span className="text-muted text-sm">Producer, BoxOffice Films</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
