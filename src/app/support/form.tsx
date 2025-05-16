"use client"

import {
    useState
} from "react"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Textarea
} from "@/components/ui/textarea"
import { action_SendFeedback } from "@/actions/feedback"
import { Loader2, SendHorizontal } from "lucide-react"

const formSchema = z.object({
    userId: z.string().optional(),
    email: z.string().email("Please enter a valid email address"),
    type: z.string().min(1, "Please select a type"),
    body: z.string().min(1, "The body cannot be empty"),
});

export default function SupportForm({
    userId,
    email,
    type,
}: {
    userId?: string,
    email?: string,
    type?: string,
}) {
    const [isLoading, setIsLoading] = useState(false)

    const defaultFormValues = {
        userId: userId ?? "",
        email: email ?? "",
        type: type ?? "Feedback",
        body: "",
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues,
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log("Sending form request ... values=", values)
            setIsLoading(true)

            // send the request
            await action_SendFeedback({
                userId: values.userId,
                email: values.email,
                body: values.body,
                type: values.type,
            })

            toast(
                <p>Successfully sent the request.<br />We will be in contact with you shortly.</p>
            );
            // form.reset(defaultFormValues)
        } catch (error) {
            console.error("Submission error:", error);
            toast("Oh no! We hit a snag. Please try again.");
        } finally {
            setIsLoading(false)
        }
    }

    return <div className="grid place-items-center">
        <div className="bg-secondary w-full max-w-lg md:min-w-lg px-4 md:px-8 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

                    <FormField
                        control={form.control}
                        name="userId"
                        render={({ field }) => (
                            <FormItem hidden={true}>
                                <FormLabel>userId</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        disabled
                                        type="text"
                                        {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="me@workoutnotepad.co"

                                        type="email"
                                        {...field} />
                                </FormControl>
                                <FormDescription>An email we can use to reply to you</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-12 gap-4">

                        <div className="col-span-11">

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Support Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="App Issue">App Issue</SelectItem>
                                                <SelectItem value="Premium Issue">Premium Issue</SelectItem>
                                                <SelectItem value="Feedback">Feedback</SelectItem>
                                                <SelectItem value="Feature Request">Feature Request</SelectItem>
                                                <SelectItem value="Data Export">Data Export</SelectItem>
                                                <SelectItem value="Delete My Account">Delete My Account</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>Give us a category so we can serve you better</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Body</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription >Tell us about what you need or your feedback!</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid place-items-center">
                        <Button className="hover:cursor-pointer" type="submit">
                            {isLoading ? <Loader2 className="animate-spin" /> : <SendHorizontal />}
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    </div>
}