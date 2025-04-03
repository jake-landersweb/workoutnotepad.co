import { queryClient } from "@/components/query-client"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import Markdown from 'react-markdown'

export default async function EULA() {
    try {
        await cookies() // force dynamic page
        const text = await queryClient.fetchQuery({
            queryKey: ["privacy-policy"],
            queryFn: async () => {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/md/eula.md`
                )
                const text = await response.text()

                if (!response.ok) {
                    // Optionally throw an error here with the text message
                    throw new Error(text)
                }
                return text
            }
        })

        return <div className="center my-16">
            <div className="container px-4 py-8 w-fit">
                <article className="prose max-w-[800px] prose-li:marker:text-primary">
                    <Markdown>{text}</Markdown>
                </article>
            </div>
        </div>
    } catch (e) {
        if (e instanceof Error) {
            console.error(e)
        }
        notFound()
    }
}