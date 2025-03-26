"use client"

import Lottie from "react-lottie-player"

export default function LottiePlayer({
    animationData,
    loop,
    speed,
}: {
    animationData: any,
    loop?: boolean,
    speed?: number,
}) {
    return <Lottie
        loop={loop ?? false}
        speed={speed ?? 1}
        animationData={animationData}
        play
    />
}