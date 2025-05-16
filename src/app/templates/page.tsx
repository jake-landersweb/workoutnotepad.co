import { action_FetchTemplates } from "@/actions/workout-templates"
import { queryClient } from "@/components/query-client"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import ViewTemplatesClient from "./client"

export default async function ViewTemplates() {
    // perform fetching of the templates from the api before rendering all of the page
    await queryClient.prefetchQuery({
        queryKey: ["workout-templates", "", []],
        queryFn: () => action_FetchTemplates("", []),
    })

    return <div className="space-y-16 center w-full">
        <h2 className="txt-subtitle">Explore Templates</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ViewTemplatesClient />
        </HydrationBoundary>
    </div>
}