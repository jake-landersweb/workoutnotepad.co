"use client"

import React from "react";
import { Input, Button, Switch } from "@nextui-org/react";
import { useState } from "react";

export default function Form({ xemail, xuserId, xtype }: { xemail?: string, xuserId?: string, xtype?: string }) {
    const [email, setEmail] = useState(xemail ?? "")
    const [name, setName] = useState("")
    const [type, setType] = useState(xtype ?? "Feedback")
    const [message, setMessage] = useState("")
    const [canContact, setCanContact] = useState(true)

    const [isLoading, setIsLoading] = useState(false)
    const [responseMessage, setResponseMessage] = useState("")

    const isValid = () => {
        if (!validateEmail(email)) {
            return false
        }
        if (message.length == 0) {
            return false
        }
        return true
    }

    const sendRequest = async () => {
        if (!isValid()) {
            return
        }
        setIsLoading(true)

        // send the request
        let encoded = JSON.stringify({
            "userId": xuserId ?? "",
            "email": email,
            "message": message,
            "canContact": canContact,
            "type": type,
            "origin": "web"
        });

        const resp = await fetch('https://pocketbase.sapphirenw.com/api/collections/wn_feedback_v2/records', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: encoded
        })

        if (resp.status == 200) {
            setResponseMessage("Successfully sent your message.")
            setEmail("")
            setName("")
            setType("")
            setMessage("")
            setCanContact(true)
        } else {
            setResponseMessage("There was an issue sending your message.")
        }
        setTimeout(() => setResponseMessage(""), 5000)
        setIsLoading(false)
    }


    const validateEmail = (value: string) => value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const validationState = React.useMemo(() => {
        if (email === "") return undefined;

        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);

    const supportType = () => {
        const options = ["App Issue", "Premium Issue", "Feedback", "Feature Request", "Data Export", "Other"]

        const items: JSX.Element[] = []

        for (let i = 0; i < options.length; i++) {
            items.push(
                <button onClick={() => setType(options[i])}>
                    <div className={`${options[i] == type ? "bg-main text-white" : "bg-cell-400 text-txt-200"} py-1 rounded-lg hover:opacity-70 transition-all`}>
                        {options[i]}
                    </div>
                </button>
            )
        }

        return items
    }

    return <div className="grid place-items-center min-h-[90vh] px-4">
        <div className="space-y-2 max-w-2xl w-full">
            <h2 className="text-2xl font-medium tracking-tight text-center">We Would Love To Hear From You</h2>
            <div className="bg-cell-200 rounded-lg p-4">
                <Input
                    variant="underlined"
                    label="Email"
                    type="email"
                    description="This is used to ensure a response to you."
                    isClearable
                    fullWidth
                    isRequired
                    color={validationState === "invalid" ? "danger" : "primary"}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    onClear={() => setEmail("")}
                    errorMessage={validationState === "invalid" && "Please enter a valid email"}
                    validationState={validationState}
                />
                <Input
                    variant="underlined"
                    label="Name"
                    type="text"
                    isClearable
                    color="primary"
                    fullWidth
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    onClear={() => setName("")}
                />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 pt-4">
                    {supportType()}
                </div>
                <Input
                    variant="underlined"
                    label="Message"
                    type="text"
                    description="Include as much detail as you can."
                    isClearable
                    color="primary"
                    fullWidth
                    isRequired
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    onClear={() => setMessage("")}
                />
                <div className="pt-4 grid place-items-center">
                    <Switch isSelected={canContact} onValueChange={setCanContact}>
                        Can we contact you about this?
                    </Switch>
                </div>
                <div className={`pt-4 grid place-items-center ${isValid() ? "" : "opacity-70"} transition-opacity`}>
                    <Button color="primary" disabled={!isValid()} onClick={() => sendRequest()} isLoading={isLoading}>
                        Submit
                    </Button>
                </div>
            </div>
            <div className="grid place-items-center">
                <p className="text-center text-txt-100 h-[30px]">{responseMessage}</p>
            </div>
        </div>
    </div>
}