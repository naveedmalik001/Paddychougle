"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Play, Search, Filter, Calendar, Eye, ChevronDown } from "lucide-react";
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
        category: "Fitness",
        image: "/images/IMG_20250713_140826.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Nike India",
        role: "Lead Model",
        description: "A high-energy campaign focused on urban running and night training. Shot on location in Mumbai.",
        date: "2024-11-15",
        views: "2.3M",
        featured: true,
    },
    {
        id: 2,
        title: "Urban Zen",
        category: "Lifestyle",
        image: "/images/IMG_20250712_185231.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "FabIndia",
        role: "Talent",
        description: "Showcasing the new summer collection with a focus on organic fabrics and modern living.",
        date: "2024-10-20",
        views: "1.8M",
        featured: true,
    },
    {
        id: 3,
        title: "Strength Define",
        category: "Commercial",
        image: "/images/IMG_20251014_231906.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Gold's Gym",
        role: "Featured Athlete",
        description: "National TVC for the brand re-launch. Emphasis on raw strength and dedication.",
        date: "2024-09-10",
        views: "3.1M",
        featured: true,
    },
    {
        id: 4,
        title: "Tech Elevate",
        category: "Technology",
        image: "/images/proclickers-8786.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Boat Audio",
        role: "Actor",
        description: "Digital series for the new noise-cancelling headphones line. Playing the role of a focused creator.",
        date: "2024-08-25",
        views: "950K",
        featured: false,
    },
    {
        id: 5,
        title: "Street Style Revolution",
        category: "Fashion",
        image: "/images/project-5.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "H&M",
        role: "Lead Model",
        description: "Urban fashion campaign showcasing the new streetwear collection.",
        date: "2024-07-30",
        views: "1.2M",
        featured: false,
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
        date: "2024-06-15",
        views: "680K",
        featured: false,
    },
    {
        id: 7,
        title: "Monsoon Dreams",
        category: "Fashion",
        image: "/images/project-7.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Zara",
        role: "Lead Model",
        description: "Rain-inspired fashion campaign celebrating the monsoon season.",
        date: "2024-05-20",
        views: "1.5M",
        featured: false,
    },
    {
        id: 8,
        title: "Digital Nomad",
        category: "Technology",
        image: "/images/project-8.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        client: "Dell",
        role: "Talent",
        description: "Campaign showcasing remote work solutions and portable technology.",
        date: "2024-04-10",
        views: "890K",
        featured: false,
    },
];

export default function AllProjectsGrid() {
    const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("newest");
    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];

    // Filter and sort projects
    const filteredProjects = allProjects
        .filter(project => {
            const matchesSearch = searchTerm === "" ||
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.category.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;

            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch(sortBy) {
                case "newest":
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case "oldest":
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                case "popular":
                    return parseFloat(b.views.replace('M', '')) - parseFloat(a.views.replace('M', ''));
                case "name":
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

    const projectCount = filteredProjects.length;

    return (
        <section className="py-24 bg-charcoal min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
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
                    <div className="mt-6 md:mt-0">
                        <div className="flex items-center gap-4 text-gold font-medium">
                            <Eye size={20} />
                            <span className="text-2xl">{projectCount}</span>
                            <span className="text-muted text-sm">Projects</span>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="mb-12 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects by name, client, or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                        />
                    </div>

                    {/* Filter Controls */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Category Filter */}
                        <div className="flex-1">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="w-full lg:hidden flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <Filter size={18} />
                                    Filters
                                </span>
                                <ChevronDown className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
                            </button>
                            <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-2`}>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                                selectedCategory === category
                                                    ? 'bg-gold text-charcoal'
                                                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sort Options */}
                        <div className="lg:w-48">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                            >
                                <option value="newest" className="bg-charcoal">Newest First</option>
                                <option value="oldest" className="bg-charcoal">Oldest First</option>
                                <option value="popular" className="bg-charcoal">Most Popular</option>
                                <option value="name" className="bg-charcoal">A-Z</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
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
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                {project.featured && (
                                    <span className="px-2 py-1 bg-gold text-charcoal text-xs font-bold rounded">Featured</span>
                                )}
                                {project.youtubeUrl && (
                                    <div className="p-2 bg-gold/90 rounded-full text-charcoal">
                                        <Play size={16} fill="currentColor" />
                                    </div>
                                )}
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1">
                                        <Eye size={12} />
                                        {project.views}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <div className="text-muted text-lg mb-4">No projects found matching your criteria.</div>
                    <button
                        onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("All");
                            setSortBy("newest");
                        }}
                        className="px-6 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-white transition-colors"
                    >
                        Clear Filters
                    </button>
                </div>
            )}

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
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-gold uppercase tracking-widest text-xs font-bold">{selectedProject.category}</span>
                                            {selectedProject.featured && (
                                                <span className="px-2 py-1 bg-gold text-charcoal text-xs font-bold rounded">Featured</span>
                                            )}
                                        </div>
                                        <h2 className="text-4xl font-serif font-bold text-white">{selectedProject.title}</h2>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-muted">
                                            <span className="flex items-center gap-1">
                                                <Eye size={14} />
                                                {selectedProject.views} views
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {new Date(selectedProject.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </span>
                                        </div>
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