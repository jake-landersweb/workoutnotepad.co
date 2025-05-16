import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support"
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="py-16 md:my-32 safe-area px-4">
        {children}
    </div>
}