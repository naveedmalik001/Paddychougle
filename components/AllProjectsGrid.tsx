"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : '';
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(url: string): string {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
}

const allProjects = [
    {
        id: 1,
        title: "Neon Athletic",
        category: "Fitness Campaign",
        image: "/images/project-1.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Nike India",
        role: "Lead Model",
        description: "A high-energy campaign focused on urban running and night training. Shot on location in Mumbai.",
    },
    {
        id: 2,
        title: "Urban Zen",
        category: "Lifestyle",
        image: "/images/project-2.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "FabIndia",
        role: "Talent",
        description: "Showcasing the new summer collection with a focus on organic fabrics and modern living.",
    },
    {
        id: 3,
        title: "Strength Define",
        category: "Commercial",
        image: "/images/project-3.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Gold's Gym",
        role: "Featured Athlete",
        description: "National TVC for the brand re-launch. Emphasis on raw strength and dedication.",
    },
    {
        id: 4,
        title: "Tech Elevate",
        category: "Digital Ad",
        image: "/images/project-4.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Boat Audio",
        role: "Actor",
        description: "Digital series for the new noise-cancelling headphones line. Playing the role of a focused creator.",
    },
    {
        id: 5,
        title: "Street Style Revolution",
        category: "Fashion Campaign",
        image: "/images/project-5.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "H&M",
        role: "Lead Model",
        description: "Urban fashion campaign showcasing the new streetwear collection.",
    },
    {
        id: 6,
        title: "Zen Master",
        category: "Wellness",
        image: "/images/project-6.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Yoga Studio",
        role: "Brand Ambassador",
        description: "Meditation and mindfulness campaign for modern lifestyle.",
    },
];

export default function AllProjectsGrid() {
    const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

    return (
        <section className="py-24 bg-charcoal min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
                    <div>
                        <Link href="/" className="text-gold hover:text-white transition-colors inline-block mb-4">
                            ← Back to Home
                        </Link>
                        <span className="text-gold uppercase tracking-widest font-bold text-sm">Complete Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">All Projects</h2>
                        <p className="text-muted mt-4 max-w-2xl">
                            Explore my complete collection of work, including campaigns, commercials, and creative collaborations with leading brands.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="absolute inset-0 bg-charcoal animate-pulse" />
                            <Image
                                src={project.youtubeUrl ? getYouTubeThumbnail(project.youtubeUrl) : project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                unoptimized={project.youtubeUrl ? true : false}
                                onError={(e) => {
                                    if (project.youtubeUrl) {
                                        const target = e.target as HTMLImageElement;
                                        target.src = project.image;
                                    }
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-gold text-sm uppercase tracking-wider font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                                <h3 className="text-white text-3xl font-serif font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                            </div>
                            {project.youtubeUrl && (
                                <div className="absolute top-4 right-4 p-3 bg-gold/90 rounded-full text-charcoal">
                                    <Play size={20} fill="currentColor" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-charcoal/50 rounded-full text-white hover:bg-white hover:text-charcoal transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                <div className="relative h-64 md:h-auto min-h-[400px]">
                                    {selectedProject.youtubeUrl ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedProject.youtubeUrl)}`}
                                            title={selectedProject.title}
                                            className="w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-8 md:p-12 space-y-6">
                                    <div>
                                        <span className="text-gold uppercase tracking-widest text-xs font-bold">{selectedProject.category}</span>
                                        <h2 className="text-4xl font-serif font-bold text-white mt-2">{selectedProject.title}</h2>
                                    </div>

                                    <div className="space-y-4 border-t border-white/10 pt-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="block text-xs uppercase text-muted">Client</span>
                                                <span className="text-white font-medium">{selectedProject.client}</span>
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase text-muted">Role</span>
                                                <span className="text-white font-medium">{selectedProject.role}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase text-muted mb-1">Focus</span>
                                            <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        {selectedProject.youtubeUrl ? (
                                            <a
                                                href={selectedProject.youtubeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-charcoal font-bold uppercase tracking-wide hover:bg-white transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                Watch on YouTube
                                            </a>
                                        ) : (
                                            <button className="w-full py-4 bg-white text-charcoal font-bold uppercase tracking-wide hover:bg-gold transition-colors">
                                                View Full Case Study
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}