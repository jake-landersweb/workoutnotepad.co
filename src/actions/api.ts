"use server"

import { AuthError } from "@/types/errors"

export type SendRequestV1Props = {
    route: string
    method?: string
    cache?: RequestCache
    headers?: Headers
    params?: URLSearchParams
    body?: BodyInit
    debugPrint?: boolean
}

// sendRequestV1 wraps a fetch request and provides all needed environment variable
// lookup, authentication, and error handling.
export async function sendRequestV2(props: SendRequestV1Props): Promise<undefined>
export async function sendRequestV2<T>(props: SendRequestV1Props): Promise<T>

export async function sendRequestV2<T>(props: SendRequestV1Props): Promise<T | undefined> {
    try {
        if (props.debugPrint === true) {
            console.warn("[WARNING] Debug print is on, disable in a production setting.")
        }
        // create the headers
        const apiKey = process.env.API_KEY

        if (apiKey == undefined) {
            throw new AuthError("invalid api key")
        }

        const headers = new Headers({ "x-api-key": apiKey })

        let host = `https://${process.env.API_HOST}/v2${props.route}`
        if (props.params !== undefined) {
            host += `?${props.params.toString()}`
        }

        if (props.debugPrint === true) {
            console.log(headers)
            console.log(host)
        }

        // send the request
        const response = await fetch(host, {
            method: props.method ?? "GET",
            cache: props.cache ?? "no-store",
            headers: headers,
            body: props.body,
        })

        // check for response errors
        if (!response.ok) {
            if (response.status == 403) {
                throw new AuthError("Unauthenticated response from the server")
            }
            throw new Error(await response.text())
        }

        // if status is no body, then return undefined
        if (response.status === 204) {
            return undefined
        }

        // read the data as json
        const rawData = await response.json()
        if (props.debugPrint === true) {
            console.log(rawData)
        }

        // perform a type conversion
        return rawData as T
    } catch (e) {
        if (e instanceof AuthError) {
            console.error("Authentication error")
            console.error(e)
            throw e
        } else if (e instanceof Error) {
            console.error(e)
            throw e
        } else {
            throw new Error("An unknown error occured")
        }
    }
}