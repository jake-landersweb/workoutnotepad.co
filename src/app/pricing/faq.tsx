import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ViewFAQ() {
    const faq: {
        title: string
        detail: string
    }[] = [
            {
                title: "What's included in the Pro plan?",
                detail: "There are a lot of subtle features and customizations included in the pro plan, but most of it boils down to advanced visualization features. We wanted to make the free version useful for everyone, and the pay layer mainly unlock smaller customizations and the entire visualization suite.",
            },
            {
                title: "Do you offer trials?",
                detail: "Yes of course! When you subscribe in-app, you have the option to try out premium for a week completely free.",
            },
            {
                title: "Can I export my data?",
                detail: "Definitely. One of the pillars our app was built upon is not locking you into any single provider. Staying fit is already hard enough, we want you to find the best fit for you.",
            },
            {
                title: "Can I use this as a trainer?",
                detail: "Definitely! And we encourage you to. If you are a trainer and are interested in getting access to some more integrations in our app, please reach out to us at support@workoutnotepad.co",
            },
            {
                title: "Do you offer refunds?",
                detail: "Definitely. The refund policy is dependent on what store you bought the subscription from. Generally, if it has been less than half the subscription renew perid (~15 days), then you should have no problems.",
            },
            {
                title: "Why a subscription?",
                detail: "We are exploring our pricing structure, and mainly use the revenue generated from the app as a re-investment into development. If a single one-time payment is more attractive to you, please reach out to us at support@workoutnotepad.co",
            },
            {
                title: "Is my data protected with you?",
                detail: "Obviously, data privacy is a trust-based system at the end of the day. But, in our systems all cloud-synced data is anonymized in our cloud, so we could not pin certain data to you even if we wanted to! We take a very serious approach to data privacy and will NEVER sell AND/OR share your data with any third party under ANY circumstances.",
            },
        ]

    return <Accordion type="single" collapsible className="w-full">
        {faq.map((item, i) => <AccordionItem key={`faq-item-${i}`} value={`faq-item-${i}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
                {item.detail}
            </AccordionContent>
        </AccordionItem>)}
    </Accordion>
}