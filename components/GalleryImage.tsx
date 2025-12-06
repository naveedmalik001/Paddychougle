"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { GalleryImage as GalleryImageType } from "../lib/types";
import { Eye, Calendar } from "lucide-react";

interface Props {
    image: GalleryImageType;
    index: number;
    onClick: (image: GalleryImageType) => void;
    lazy?: boolean;
}

export default function GalleryImage({ image, index, onClick, lazy = true }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const { ref, isVisible, hasBeenVisible } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "50px",
        freezeOnceVisible: true,
    });

    const shouldLoad = !lazy || hasBeenVisible;

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: shouldLoad ? 1 : 0.3,
                y: shouldLoad ? 0 : 20,
            }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm"
            onClick={() => onClick(image)}
        >
            {/* Loading skeleton */}
            {isLoading && shouldLoad && (
                <div className="absolute inset-0 bg-charcoal animate-pulse" />
            )}

            {/* Image */}
            {shouldLoad && !hasError && (
                <Image
                    src={image.src}
                    alt={image.alt || image.title || "Gallery image"}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 opacity-0 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 6} // Prioritize first 6 images
                    onError={handleError}
                    onLoad={handleLoad}
                    style={{ opacity: isLoading ? 0 : 1 }}
                />
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 bg-charcoal/80 flex items-center justify-center">
                    <span className="text-muted text-sm">Image unavailable</span>
                </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Metadata */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                    {image.category && (
                        <span className="px-2 py-1 bg-gold/80 text-charcoal text-xs font-bold rounded">
                            {image.category}
                        </span>
                    )}
                </div>
                {image.createdAt && (
                    <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(image.createdAt)}
                    </span>
                )}
            </div>

            {/* View indicator */}
            <div className="absolute top-4 right-4 p-2 bg-charcoal/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye size={16} />
            </div>
        </motion.div>
    );
}