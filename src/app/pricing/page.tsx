import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaCheck } from "react-icons/fa6"
import ViewFAQ from "./faq"

export default function ViewPricing() {
    const checkItem = (text: string) => {
        return <div className="flex items-center space-x-2">
            <FaCheck size={15} className="text-primary" />
            <p className="text-sm">{text}</p>
        </div>
    }

    const Section = ({
        className,
        title,
        color,
        description,
        price,
        buttonTitle,
        buttonDestination,
        items,
    }: {
        className: string,
        title: string,
        color: string,
        description: string,
        price: string,
        buttonTitle: string,
        buttonDestination: string
        items: string[],
    }) => {
        return <div className={`p-8 bg-muted border space-y-2 ${className}`}>
            <div className="flex items-center space-x-4">
                <h3 className="text-xl font-med">{title}</h3>
                <div className={`h-[12px] w-[12px] rounded-full ${color}`}></div>
            </div>
            <p className="txt-sm text-muted-foreground">{description}</p>
            <div className="flex items-start py-4">
                <p>
                    <span className="text-4xl font-bold">$</span>
                    <span className="text-4xl font-bold">{price}</span>
                </p>
                <p className="text-sm font-bold text-muted-foreground">/USD</p>
            </div>
            <Button className="w-full" asChild><Link href={buttonDestination}>{buttonTitle}</Link></Button>
            <div className="pt-4 space-y-4">
                {items.map((item, i) => <div key={`item-${title}-${i}`}>{checkItem(item)}</div>)}
            </div>
        </div>
    }

    return <div className="center space-y-4">
        <h2 className="txt-title">Unlock All Access</h2>
        <p className="max-w-xl text-center text-lg text-muted-foreground font-medium">We aim to have a fair pricing policy with loads of features in the free tier and no ads ever. If our app works for you, consider subscribing and supporting the small, passionate development team.</p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 w-full max-w-[800px] pt-4">
            <Section
                className="rounded-2xl md:rounded-none md:rounded-tl-2xl md:rounded-bl-2xl"
                title="Free Plan"
                color="bg-amber-400"
                description="Free forever - No ads"
                price="0.00"
                buttonTitle="Free Forever - Download Now"
                buttonDestination="/download"
                items={[
                    "Lifetime Free",
                    "No ads, EVER",
                    "Feature Full, No Workout Limits",
                    "Limited Dashboards",
                ]}
            />
            <Section
                className="rounded-2xl md:rounded-none md:rounded-tr-2xl md:rounded-br-2xl"
                title="Subscription Plan"
                color="bg-green-300"
                description="Stable Price Forever"
                price="9.99"
                buttonTitle="Subscribe Now"
                buttonDestination="/download"
                items={[
                    "Unlock All Insights",
                    "More Advanced Graph Dashboards",
                    "Custom Graph Builder",
                    "Customizable Categories and Tags",
                    "Data Syncing",
                ]}
            />
        </div>
        <div className="w-full">
            <div className="pt-32 max-w-2xl mx-auto space-y-4">
                <div className="center">
                    <h3 className="txt-subheader">Frequently Asked Questions</h3>
                </div>
                <div className="center w-full">
                    <ViewFAQ />
                </div>
            </div>
        </div>
    </div>
}