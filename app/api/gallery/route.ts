import { NextResponse } from 'next/server';
import { getPaginatedImages } from '@/lib/galleryImages';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');

        // Validate pagination parameters
        if (page < 1 || limit < 1 || limit > 50) {
            return NextResponse.json(
                { error: 'Invalid pagination parameters' },
                { status: 400 }
            );
        }

        const data = getPaginatedImages(page, limit);

        // Add caching headers for better performance
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Gallery API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}