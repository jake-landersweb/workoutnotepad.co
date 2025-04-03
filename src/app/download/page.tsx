import ScreenshotSection from "@/components/screenshot-section/screenshot-section";
import { ButtonStoreApple, ButtonStoreGoogle } from "@/components/store-buttons";

export default function ViewDownload() {
    return <div className="center">
        <ScreenshotSection
            header={"Download"}
            title={"Download Now"}
            desc={"We support both iOS and Android, with feature parity between the two. Download today to elevate your workout analytics!"}
            images={[
                { src: "/screenshots/device/0-homescreen.webp", alt: "Homescreen" }
            ]}
            items={[]}
            extra={<div className="center">
                <div className="space-y-2 md:space-y-0 md:flex md:space-x-2 w-min">
                    <div className=""><ButtonStoreApple /></div>
                    <div className=""><ButtonStoreGoogle /></div>
                </div>
            </div>}
        />
    </div>
}