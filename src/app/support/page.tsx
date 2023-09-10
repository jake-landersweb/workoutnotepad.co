import Form from "@/components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "W. Notepad - Privacy Policy",
}

export default function Support({ params, searchParams }) {
    // this is how you parse url args, /support?email=...&userId=...
    const email: string | undefined = searchParams['email']
    const userId: string | undefined = searchParams['userId']
    const type: string | undefined = searchParams['type']
    return <div className="">
        <Form xemail={email} xuserId={userId} xtype={type} />
    </div>
}