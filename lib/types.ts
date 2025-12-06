export interface GalleryImage {
    id: string;
    filename: string;
    src: string;
    title?: string;
    category?: string;
    tags?: string[];
    width?: number;
    height?: number;
    alt?: string;
    createdAt?: string;
}