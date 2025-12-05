import { Award, Camera, Heart, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
    { label: "Instagram Followers", value: "703K", icon: Heart },
    { label: "Projects", value: "500+", icon: Zap },
    { label: "Brands", value: "50+", icon: Users },
    { label: "Impressions", value: "15M+", icon: TrendingUp },
    { label: "Creative", value: "100%", icon: Award },
];

export default function StatsGrid() {
    return (
        <section className="py-20 border-b border-white/5 bg-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                            <div className="p-4 rounded-full bg-white/5 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                                <stat.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-4xl font-serif font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-muted uppercase tracking-widest text-sm">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
