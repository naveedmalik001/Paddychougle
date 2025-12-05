import { Camera, Video, Monitor, UserCheck } from "lucide-react";

const services = [
    {
        title: "Commercial Modeling",
        description: "High-impact visual storytelling for fitness and lifestyle brands.",
        icon: Camera,
    },
    {
        title: "Acting & Video",
        description: "On-camera performance for TVCs, digital campaigns, and short films.",
        icon: Video,
    },
    {
        title: "Content Creation",
        description: "Engaging social-first content that drives brand awareness and conversion.",
        icon: Monitor,
    },
    {
        title: "Brand Ambassadorship",
        description: "Long-term partnerships representing your brand's values and identity.",
        icon: UserCheck,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-gold uppercase tracking-widest font-bold text-sm">Services</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What I Deliver</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 rounded-sm"
                        >
                            <div className="mb-6 text-gold group-hover:text-white transition-colors">
                                <service.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
