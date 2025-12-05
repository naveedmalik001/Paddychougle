import { Award, Camera, Users, Zap } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "5+", icon: Camera },
    { label: "Projects Completed", value: "100+", icon: Zap },
    { label: "Brand Partners", value: "25+", icon: Users },
    { label: "Industry Awards", value: "3", icon: Award },
];

export default function StatsGrid() {
    return (
        <section className="py-20 border-b border-white/5 bg-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
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
