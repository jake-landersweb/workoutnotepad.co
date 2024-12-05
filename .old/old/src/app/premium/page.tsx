import SafeArea from "@/components/safeArea"
import ServiceLargeItem from "@/components/serviceItem"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "W. Notepad - Premium",
}

export default function Premium() {
    return <div className="p-4">
        <SafeArea>
            <div className="space-y-16">
                <div className="text-center">
                    <h4 className="md:text-xl text-txt-200">Supercharge Your App Experience With</h4>
                    <h2 className="text-3xl md:text-6xl text-main font-semibold">Workout Notepad Premium</h2>
                </div>
                <ServiceLargeItem props={{
                    title: "Exercise Graphs",
                    src: "/assets/reps-graph.png",
                    alt: "Workout Reps Graph",
                    reverse: false,
                    description: "View powerful yet flexible graphs on all of the exercises you have logged. View your reps or weight distribution grouped by either set number or date it was logged. Gone are the days of excel charts and graphs, viewing your progress in an interactive way has never been easier.",
                }} />
                <ServiceLargeItem props={{
                    title: "Cagtegory Distribution",
                    src: "/assets/categories.png",
                    alt: "Workout Category Distribution",
                    reverse: true,
                    description: "After some time in the app, you will be able to get a sense of the distribution you are hitting your various muscle groups. Combined with customizable categories offered in premium, identify any blind spots in your training without going overboard on logging.",
                }} />
            </div>
        </SafeArea>
    </div>
}