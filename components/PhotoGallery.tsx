"use client";

import { useState, useEffect, useCallback } from "react";
import GalleryImage from "./GalleryImage";
import PhotoModal from "./PhotoModal";
import GalleryPagination from "./GalleryPagination";
import { GalleryImage as GalleryImageType } from "../lib/types";

interface Props {
    initialImages?: GalleryImageType[];
    initialPage?: number;
    imagesPerPage?: number;
}

export default function PhotoGallery({
    initialImages = [],
    initialPage = 1,
    imagesPerPage = 12
}: Props) {
    const [images, setImages] = useState<GalleryImageType[]>(initialImages);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(initialPage);
    const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);
    const [totalCount, setTotalCount] = useState<number>(initialImages.length > 0 ? 50 : 0); // Will be updated from API

    // Load initial images if not provided
    useEffect(() => {
        if (initialImages.length === 0) {
            loadImages(1, true);
        }
    }, []);

    const loadImages = useCallback(async (pageNum: number = page, isInitial: boolean = false) => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await fetch(`/api/gallery?page=${pageNum}&limit=${imagesPerPage}`);
            const data = await response.json();

            if (data.error) {
                console.error("Gallery API Error:", data.error);
                return;
            }

            if (isInitial) {
                setImages(data.images);
                setPage(data.currentPage);
            } else {
                setImages(prev => [...prev, ...data.images]);
            }

            setHasMore(data.hasMore);
            setTotalCount(data.totalCount);
        } catch (error) {
            console.error("Error loading gallery images:", error);
        } finally {
            setLoading(false);
        }
    }, [page, imagesPerPage, loading]);

    const handleLoadMore = useCallback(() => {
        if (!hasMore || loading) return;
        const nextPage = page + 1;
        setPage(nextPage);
        loadImages(nextPage);
    }, [hasMore, loading, page, loadImages]);

    const handleImageClick = useCallback((image: GalleryImageType) => {
        setSelectedImage(image);
    }, []);

    const handleNext = useCallback(() => {
        if (!selectedImage) return;
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        if (currentIndex < images.length - 1) {
            setSelectedImage(images[currentIndex + 1]);
        } else if (hasMore && !loading) {
            // Load next page and then navigate
            handleLoadMore();
        }
    }, [selectedImage, images, hasMore, loading, handleLoadMore]);

    const handlePrevious = useCallback(() => {
        if (!selectedImage) return;
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        if (currentIndex > 0) {
            setSelectedImage(images[currentIndex - 1]);
        }
    }, [selectedImage, images]);

    const handleCloseModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    return (
        <div className="w-full">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {images.map((image, index) => (
                    <GalleryImage
                        key={image.id}
                        image={image}
                        index={index}
                        onClick={handleImageClick}
                        lazy={index >= 6} // Lazy load images after the first 6
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            <GalleryPagination
                loading={loading}
                hasMore={hasMore}
                onLoadMore={handleLoadMore}
                totalCount={totalCount}
                currentCount={images.length}
            />

            {/* Photo Modal */}
            {selectedImage && (
                <PhotoModal
                    image={selectedImage}
                    images={images}
                    onClose={handleCloseModal}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            )}
        </div>
    );
}