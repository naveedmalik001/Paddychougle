"use client";

import { Loader, ChevronDown } from "lucide-react";

interface Props {
    loading: boolean;
    hasMore: boolean;
    onLoadMore: () => void;
    totalCount: number;
    currentCount: number;
}

export default function GalleryPagination({
    loading,
    hasMore,
    onLoadMore,
    totalCount,
    currentCount
}: Props) {
    if (currentCount === 0) return null;

    return (
        <div className="flex flex-col items-center gap-4 mt-12">
            {/* Counter */}
            <div className="text-muted text-sm">
                Showing {currentCount} of {totalCount} photos
            </div>

            {/* Load More Button */}
            <div className="relative">
                {hasMore && (
                    <button
                        onClick={onLoadMore}
                        disabled={loading}
                        className="group flex items-center gap-3 px-8 py-4 bg-gold text-charcoal font-bold uppercase tracking-wider hover:bg-white transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? (
                            <>
                                <Loader className="animate-spin" size={20} />
                                Loading...
                            </>
                        ) : (
                            <>
                                Load More Photos
                                <ChevronDown
                                    size={20}
                                    className="transform transition-transform group-hover:translate-y-1"
                                />
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* End message */}
            {!hasMore && currentCount > 0 && (
                <div className="text-center text-muted">
                    <p className="text-sm mb-2">You've reached the end of the gallery</p>
                    <p className="text-xs">
                        That's all {totalCount} photos!
                    </p>
                </div>
            )}

            {/* Loading indicator for initial load */}
            {loading && currentCount === 0 && (
                <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 bg-charcoal animate-pulse rounded-sm"
                            />
                        ))}
                    </div>
                    <p className="text-muted text-sm">Loading gallery...</p>
                </div>
            )}
        </div>
    );
}