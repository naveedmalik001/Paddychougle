export default function Process() {
    const steps = [
        { num: "01", title: "Discovery", desc: "Understanding your brand vision and campaign goals." },
        { num: "02", title: "Preparation", desc: "Styling, moodboarding, and physical preparation." },
        { num: "03", title: "Execution", desc: "On-set performance with focus and adaptability." },
        { num: "04", title: "Delivery", desc: "Collaborating on selection and post-production needs." },
    ];

    return (
        <section id="process" className="py-24 bg-charcoal border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-gold uppercase tracking-widest font-bold text-sm">Workflow</span>
                    <h2 className="text-4xl font-serif font-bold text-white mt-4">How We Work Together</h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 bg-charcoal pr-4">
                            <div className="w-24 h-24 rounded-full bg-charcoal border border-gold/20 flex items-center justify-center mb-6 shadow-xl shadow-black/50 mx-auto md:mx-0">
                                <span className="text-3xl font-serif font-bold text-gold">{step.num}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
                            <p className="text-muted text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
