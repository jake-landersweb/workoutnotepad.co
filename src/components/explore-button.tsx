import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

export type MoreButtonProps = {
    title: string
    href: string
}

export default function MoreButton({
    title = "Explore More",
    href = "",
}: MoreButtonProps) {
    return <Link href={href}>
        <div className="flex items-center space-x-2 text-sm txt-body hover:opacity-30">
            <p className="">{title}</p>
            <FaArrowRight size={14} />
        </div>
    </Link>
}