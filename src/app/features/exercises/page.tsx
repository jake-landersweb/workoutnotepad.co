import ScreenshotSection, { ScreenshotSectionProps } from "@/components/screenshot-section/screenshot-section";

export default function ViewExercises() {
    const sections: ScreenshotSectionProps[] = [
        {
            header: "exercises",
            title: "Exercise Bank",
            desc: "We provide you with a comprehensive list of default exercises with templates built off of these. Create your own exercises or update the ones provided as you like.",
            images: [
                { src: "/screenshots/device/5-exercise-home.webp", alt: "Exercise Home" },
            ],
            items: [
                "Customizable Categories",
                "Image and Video Support",
                "Export Data at Any Time",
            ],
        },
        {
            header: "exercises",
            title: "Exercise Log Dashboard",
            desc: "One of the advantages of consistently using exercises in all of your workouts, is the ability to create a comprehensive dashboard for your progress at a per-exercise level.",
            images: [
                { src: "/screenshots/device/6-exercise-detail-cardio.webp", alt: "Exercise Log Dashboard" },
            ],
            items: [
                "Dynamic Overview Graph",
                "Custom Exercise Graph Dashboard",
                "View Past Log Raw Data",
            ],
        },
    ];

    return <div className="my-16 md:my-32 center space-y-8">
        <h2 className="txt-subtitle text-center">Exercises</h2>
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