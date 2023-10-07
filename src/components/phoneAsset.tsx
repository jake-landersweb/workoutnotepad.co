export default function PhoneAsset({ src, alt, className }: { src: string, alt: string, className: string }) {
    return <div className="rounded-2xl border border-cell-700 overflow-clip">
        <img src={src} alt={alt} className={`${className} object-scale-down max-h-[500px]`} />
    </div>
}