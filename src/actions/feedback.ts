"use server"

export type SendFeedbackProps = {
    userId?: string
    email: string
    body: string
    type: string
}

export async function action_SendFeedback(props: SendFeedbackProps) {
    try {
        const encoded = JSON.stringify({
            "userId": props.userId ?? "",
            "email": props.email,
            "message": props.body,
            "canContact": true,
            "type": props.type,
            "origin": "web"
        });

        const baseUrl = process.env.POCKETBASE_BASE_URL
        if (baseUrl === undefined) {
            throw "failed to get the base url. Set the `POCKETBASE_BASE_URL` environment variable"
        }

        const resp = await fetch(`https://${baseUrl}/api/collections/wn_feedback_v2/records`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: encoded
        })

        if (resp.status > 299) {
            throw "There was an issue sending the request"
        }

        console.log("successfully sent the feedback request")
    } catch (e) {
        if (e instanceof Error) {
            console.error(e)
            throw e
        } else {
            throw new Error("unknown error submitting the form")
        }
    }
}