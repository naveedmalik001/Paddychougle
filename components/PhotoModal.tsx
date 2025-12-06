"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { GalleryImage } from "../lib/types";

interface Props {
    image: GalleryImage | null;
    images: GalleryImage[];
    onClose: () => void;
    onNext?: () => void;
    onPrevious?: () => void;
}

export default function PhotoModal({ image, images, onClose, onNext, onPrevious }: Props) {
    const [isZoomed, setIsZoomed] = useState(false);
    const currentIndex = image ? images.findIndex(img => img.id === image.id) : -1;

    // Keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!image) return;

        switch (e.key) {
            case "Escape":
                onClose();
                break;
            case "ArrowLeft":
                if (onPrevious && currentIndex > 0) {
                    onPrevious();
                }
                break;
            case "ArrowRight":
                if (onNext && currentIndex < images.length - 1) {
                    onNext();
                }
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                setIsZoomed(prev => !prev);
                break;
        }
    }, [image, currentIndex, images.length, onClose, onNext, onPrevious]);

    useEffect(() => {
        if (image) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [image, handleKeyDown]);

    if (!image) return null;

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative z-10 w-full max-w-6xl h-[95vh] flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 bg-charcoal/90 border-b border-white/10">
                        <div className="flex-1 min-w-0">
                            {image.title && (
                                <h2 className="text-xl font-serif font-bold text-white truncate">
                                    {image.title}
                                </h2>
                            )}
                            <div className="flex items-center gap-4 mt-1 text-sm text-muted">
                                {image.category && (
                                    <span className="px-2 py-1 bg-gold/20 text-gold text-xs font-bold rounded">
                                        {image.category}
                                    </span>
                                )}
                                {image.createdAt && (
                                    <span>{formatDate(image.createdAt)}</span>
                                )}
                                <span>{currentIndex + 1} / {images.length}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsZoomed(!isZoomed)}
                                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                                title={isZoomed ? "Zoom out" : "Zoom in"}
                            >
                                {isZoomed ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                            </button>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                                title="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Image container */}
                    <div className="flex-1 bg-charcoal/90 relative overflow-hidden p-8">
                        {/* Previous button */}
                        {onPrevious && currentIndex > 0 && (
                            <button
                                onClick={onPrevious}
                                className="absolute left-8 z-20 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                                title="Previous image"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}

                        {/* Next button */}
                        {onNext && currentIndex < images.length - 1 && (
                            <button
                                onClick={onNext}
                                className="absolute right-8 z-20 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                                title="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}

                        {/* Image */}
                        <div
                            className={`w-full h-full flex items-center justify-center ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} bg-charcoal/80 rounded-lg overflow-hidden`}
                            onClick={() => setIsZoomed(!isZoomed)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt || image.title || "Gallery image"}
                                fill
                                className={`object-contain transition-transform duration-300 ${
                                    isZoomed ? 'scale-150' : 'scale-100'
                                }`}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 70vw"
                                priority
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}