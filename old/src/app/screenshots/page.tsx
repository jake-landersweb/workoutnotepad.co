import PhoneAsset from "@/components/phoneAsset";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "W. Notepad - Screenshots",
}

export default function Support({ params, searchParams }) {
    return <div className="grid place-items-center px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit">
            <PhoneAsset src={"/screenshots/1.png"} alt={""} className={""} />
            <PhoneAsset src={"/screenshots/2.png"} alt={""} className={""} />
            <PhoneAsset src={"/screenshots/3.png"} alt={""} className={""} />
            <PhoneAsset src={"/screenshots/4.png"} alt={""} className={""} />
            <PhoneAsset src={"/screenshots/5.png"} alt={""} className={""} />
            <PhoneAsset src={"/screenshots/6.png"} alt={""} className={""} />
            <PhoneAsset src={"/screenshots/7.png"} alt={""} className={""} />
        </div>
    </div>
}