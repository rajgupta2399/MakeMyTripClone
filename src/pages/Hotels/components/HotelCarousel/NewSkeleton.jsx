import React, { useState, useEffect } from "react";
import { SkeletonCard } from "./SkeletonCard";

const NewSkeleton = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
            // Set initial state based on window size
            setIsSmallScreen(window.innerWidth <= 550);

            // Define resize event handler
            const handleResize = () => {
                setIsSmallScreen(window.innerWidth <= 550);
            };

            // Add event listener
            window.addEventListener('resize', handleResize);

            // Cleanup event listener on unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); // Run once on mountG

    const skeletonCount = isSmallScreen ? 2 : 6;

    return (
        <div className="flex justify-center align-middle flex-row gap-8 mt-12">
            {[...Array(skeletonCount)].map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default NewSkeleton;