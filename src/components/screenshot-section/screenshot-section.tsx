import { FaCheck } from "react-icons/fa6"
import SectionHeader from "../section-header"
import ScreenShotSectionImage from "./screenshot-section-img";

export type ScreenshotSectionProps = {
    header: string
    title: string
    desc: string
    images: { src: string, alt: string }[]
    items: string[]
    reverse?: boolean
    extra?: JSX.Element
    tag?: string
}

const ScreenshotSection = (props: ScreenshotSectionProps) => {

    const checkItem = (text: string) => {
        return <div className="flex items-center space-x-2">
            <FaCheck size={15} className="text-primary" />
            <p>{text}</p>
        </div>
    }

    return <div id={props.tag} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 place-items-center px-4 md:px-8">
        <div className={`space-y-4 ${props.reverse ?? false ? "md:order-2" : "order-1"}`}>
            <SectionHeader title={props.header} />
            <div className="space-y-4 md:max-w-md">
                <h4 className="txt-header">{props.title}</h4>
                <p className="txt-body">{props.desc}</p>
                <div className="space-y-2">
                    {props.items.map((item, i) => <div key={`check-item-${i}`}>{checkItem(item)}</div>)}
                </div>
                {props.extra}
            </div>
        </div>
        <div className={`w-fit mx-auto md:pt-8 ${props.reverse ?? false ? "md:order-1" : "order-2"}`}>
            <div className="">
                {props.images.map((item, i) => <ScreenShotSectionImage key={`img-${props.title}-${i}`} src={item.src} alt={item.alt} />)}
            </div>
        </div>
    </div>
}

export default ScreenshotSection