"use server"

import { WorkoutTemplate } from "@/types/template"
import { sendRequestV2 } from "./api"

export type FetchTemplatesResponse = WorkoutTemplate[]

export async function FetchTemplates(searchText?: string, categories?: string[]): Promise<FetchTemplatesResponse | undefined> {
    return await sendRequestV2<FetchTemplatesResponse>({
        route: "/templates",
        method: "GET",
        params: new URLSearchParams({
            "searchText": searchText ?? "",
            "categories": categories?.join(",") ?? "",
        })
    })
}