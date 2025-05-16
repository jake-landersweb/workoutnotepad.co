import { Button } from "@/components/ui/button";
import SupportForm from "./form";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function ViewSupport({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { email, userId, type } = await searchParams

    return <div className="center space-y-4">
        <h2 className="txt-subheader">Get Support</h2>
        <SupportForm userId={userId} email={email} type={type} />
        <Button variant="secondary" asChild>
            <Link href="https://docs.workoutnotepad.co">
                Looking For Documenation?
                <ArrowRight />
            </Link>
        </Button>
    </div>
}