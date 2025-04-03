export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="my-16 safe-area px-4">
        {children}
    </div>
}