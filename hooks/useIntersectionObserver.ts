import { useEffect, useRef, useState } from 'react';

interface Options {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
}: Options = {}) {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const ref = useRef<Element>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);
                setIsVisible(entry.isIntersecting);

                if (freezeOnceVisible && entry.isIntersecting) {
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                root,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => observer.unobserve(element);
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    useEffect(() => {
        if (isVisible && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isVisible, hasBeenVisible]);

    return {
        ref,
        entry,
        isVisible,
        hasBeenVisible,
    };
}