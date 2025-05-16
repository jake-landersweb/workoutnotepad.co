"use server"

export async function action_FetchMarkdown(documentName: string): Promise<string | undefined> {
    try {
        const response = await fetch(`http://localhost:3000/public/md/${documentName}.md`, {
            method: "GET",
            cache: "no-store",
        })

        if (!response.ok) {
            throw new Error(await response.text())
        }

        return await response.text()
    } catch (e) {
        if (e instanceof Error) {
            console.error(e)
            throw e
        } else {
            throw new Error("unknown error fetching markdown document")
        }
    }
}