"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScreenShotSectionImage({
    src,
    alt
}: {
    src: string;
    alt: string;
}) {
    const factor = 1284 / 2778;
    const defaultHeight = 650;
    const defaultWidth = defaultHeight * factor;

    const [dimensions, setDimensions] = useState({
        height: defaultHeight,
        width: defaultWidth
    });

    useEffect(() => {
        const computeDimensions = () => {
            // Choose height based on viewport. Adjust as needed.
            const height = window.innerWidth >= 768 ? 650 : 450;
            const width = height * factor;
            setDimensions({ height, width });
        };

        computeDimensions();
        window.addEventListener("resize", computeDimensions);
        return () => window.removeEventListener("resize", computeDimensions);
    }, [factor]);

    return (
        <div
            style={{
                height: `${dimensions.height}px`,
                width: `${dimensions.width}px`
            }}
            className="relative"
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
}
