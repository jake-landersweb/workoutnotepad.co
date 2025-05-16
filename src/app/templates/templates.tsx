"use client"

import { action_FetchTemplates, FetchTemplatesResponse } from "@/actions/workout-templates"
import { useQuery } from "@tanstack/react-query"
import ViewTemplateCell from "./template-cell"
import { Skeleton } from "@/components/ui/skeleton"

export default function TemplatesComponent({ searchText, categories }: {
    searchText?: string,
    categories?: string[],
}) {

    const templateResponse = useQuery({
        queryKey: ["workout-templates", searchText?.toLowerCase(), categories?.toSorted()],
        queryFn: () => action_FetchTemplates(searchText ?? "", categories ?? []),
    })

    if (templateResponse.isLoading) {
        return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
            <Skeleton className="h-[300px] w-full rounded-2xl" />
        </div>
    }

    if (templateResponse.error !== null || templateResponse.data === undefined) {
        return <div className=""><p>There was an error getting the templates</p></div>
    }

    const templates: FetchTemplatesResponse = templateResponse.data

    return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((item, i) => <ViewTemplateCell key={`template-cell-${i}`} t={item} />)}
    </div>
}