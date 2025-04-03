import ScreenshotSection, { ScreenshotSectionProps } from "@/components/screenshot-section/screenshot-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Workouts"
}

export default async function ViewWorkouts() {

    const sections: ScreenshotSectionProps[] = [
        {
            header: "workouts",
            title: "Intuative Workout Builder",
            desc: "We wanted to create a seamless experience for you to put together your workouts to minimize the friction there is when planning and editing workouts in real time.",
            images: [
                { src: "/screenshots/device/3-workout-edit.webp", alt: "Workout Edit" },
            ],
            items: [
                "Drag and Drop Editor",
                "Specify Reps/Sets/Time",
                "Super-Set Support",
                "In-Progress Edits",
            ],
            tag: "builder",
        },
        {
            header: "workouts",
            title: "Immersive Workout Launcher",
            desc: "Good data is the most important part to great visualization, so we give you a best-in-class experience to input your exercise data as simple as possible.",
            images: [
                { src: "/screenshots/device/4-workout-launch.webp", alt: "Workout Edit" },
            ],
            items: [
                "Time Between Sets",
                "Custom Tagging for Each Set",
                "View Previous Set Data",
                "Switch, Re-Order, Delete and More",
            ],
            tag: "launcher",
        },
        {
            header: "workouts",
            title: "Templates",
            desc: "Explore the large catalogue of online workout templates crafted by experts in the field to help you achieve your goals. We have templates for everyone.",
            images: [
                {
                    src: "/screenshots/device/7-discover-home.webp",
                    alt: "Workout Templates",
                },
            ],
            items: [
                "Templates for Every Type of Lifter",
                "Saveable and Editable",
                "Personal Template Collections",
            ],
        },
        {
            header: "visualization",
            title: "Post-Workout Reports",
            desc: "At the end of every workout, we automatically generate a comprehensive post-workout report for you to see how your workout went. Share these reports or view them at a later time.",
            images: [
                {
                    src: "/screenshots/device/1-post-workout.webp",
                    alt: "Post Workout Report",
                },
            ],
            items: [
                "Time, Reps, and Weight Overview",
                "Custom Graphs",
                "Raw Set Data",
            ],
            tag: "post-workout-report"
        },
    ];

    return <div className="my-16 md:my-32 center space-y-8">
        <h2 className="txt-subtitle text-center">Workouts</h2>
        <div className="mx-auto space-y-16">
            {sections.map((item, i) => <ScreenshotSection
                key={`screenshot-section-${i}`}
                header={item.header}
                title={item.title}
                desc={item.desc}
                images={item.images}
                items={item.items}
                tag={item.tag}
                extra={item.extra}
                reverse={i % 2 == 1}
            />)}
        </div>
    </div>
}