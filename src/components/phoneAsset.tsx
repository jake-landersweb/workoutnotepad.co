export default function PhoneAsset({ src, alt, className }: { src: string, alt: string, className: string }) {
    return <div className="bg-black p-1 rounded-[18px] w-fit">
        <img src={src} alt={alt} className={`${className} object-scale-down h-[300px]`} />
    </div>
}