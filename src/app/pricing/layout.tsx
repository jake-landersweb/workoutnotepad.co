import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing"
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="min-h-screen py-16 md:my-32 safe-area px-4">
        {children}
    </div>
}