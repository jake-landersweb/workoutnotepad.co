import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return <div className="safe-area center space-y-4">
        <p className="text-lg">Oops! Your route was not found.</p>
        <Button asChild><Link href="/">Return Home</Link></Button>
        <p className="txt-title text-6xl text-primary font-black">404</p>
    </div>
}