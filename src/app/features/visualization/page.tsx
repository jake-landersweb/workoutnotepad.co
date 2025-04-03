import ScreenshotSection, { ScreenshotSectionProps } from "@/components/screenshot-section/screenshot-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visualization"
}

export default function ViewVisualization() {
    const sections: ScreenshotSectionProps[] = [
        {
            header: "visualization",
            title: "Workout Insights",
            desc: "Using data from your previous workouts, we show you trends and distributions automatically in real time. Use this information to influence your future workouts.",
            images: [
                { src: "/screenshots/device/8-insights-home.webp", alt: "Workout Insights" },
            ],
            items: [
                "Time-based Tracking",
                "Distribution by Category/Weight/Reps/+More",
                "Max/Avergage Weight/Reps/Time",
                "Configurable Range",
            ],
            tag: "insights",
        },
        {
            header: "visualization",
            title: "Advanced Graphs",
            desc: "As we use the app ourselves, we are constantly finding the best ways to visualize our own workout progress and create these tools to share with you. With more than 6 different graph types.",
            images: [
                { src: "/screenshots/device/9-insights-home-2.webp", alt: "Workout Insights" },
            ],
            items: [
                "Time-based Charts",
                "Distribution Spider/Pie Charts",
                "Bar Charts",
                "Board-based Rank Charts",
            ],
            tag: "launcher",
        },
        {
            header: "visualization",
            title: "Custom Graphs",
            desc: "We built our graphing engine to allow you to create all the graphs yourself. All of our in-app visualizations are created with the same set of tools we make available to you.",
            images: [
                {
                    src: "/screenshots/device/10-logs-home.webp",
                    alt: "Logs Home",
                },
            ],
            items: [
                "Customizable Range Support",
                "Grouping and Condensing Support",
                "Advanced Filtering Capabilities",
                "Custom Colors, Labels, Legends, +More"
            ],
            tag: "graph-builder"
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
        <h2 className="txt-subtitle text-center">Visualization</h2>
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