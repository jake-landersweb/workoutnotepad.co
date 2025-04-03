"use client"

import { Input } from "@/components/ui/input"
import TemplatesComponent from "./templates"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ViewTemplatesClient() {
    const [searchText, setSearchText] = useState("")
    const [categories, setCategories] = useState<string[]>([])

    const [cSearchText, setcSearchText] = useState("")
    const [cCategories, setcCategories] = useState<string[]>([])

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // set the cache fields
        setcSearchText(searchText)
        setcCategories(categories)
    }

    return <div className="space-y-4 w-full">
        <div className="center">
            <form onSubmit={submit}>
                <div className="flex w-full items-center space-x-2 md:w-lg">
                    <Input
                        key="search-input"
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button key="search-button" type="submit">Search</Button>
                </div>
            </form>
        </div>
        <TemplatesComponent searchText={cSearchText} categories={cCategories} />
    </div>
}