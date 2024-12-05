import { ReactNode } from "react";

export default function SafeArea({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={`${className} max-w-[1200px] mx-auto 2xl:max-w-[1500px]`}>
        {children}
    </div>
}