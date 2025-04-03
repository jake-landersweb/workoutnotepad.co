import ExploreButton from "@/components/explore-button";
import ScreenshotSection from "@/components/screenshot-section/screenshot-section";

export default function FeaturesExercise() {
    return <div className="center">
        <div className="mx-auto space-y-32">
            <ScreenshotSection
                header="workouts"
                title="Expandable Exercise Bank"
                desc="We give you a robust set of default exercises with the ability to add your own. Complete with levels, images, and custom attributes to fit what you need."
                images={[
                    { src: "/screenshots/device/5-exercise-home.webp", alt: "Exercise Home" },
                ]}
                items={[
                    "5+ Different Types",
                    "Custom Categories and Types",
                    "Super-Set Support",
                    "Image Uploading",
                ]}
                reverse={false}
            />
            <ScreenshotSection
                header="workouts"
                title="Comprehensive Exercise Reports"
                desc="Each exercise has it's own dedicated analytics report generated automatically for you in real time. Always know the current trends in your training broken down by exericse."
                images={[{ src: "/screenshots/device/6-exercise-detail-cardio.webp", alt: "Exercise Detail" }]}
                items={[
                    "Graph Dashboard",
                    "Historical Data",
                    "Filter on Tags, Time, and More",
                ]}
                reverse={true}
            />
            <ScreenshotSection
                header="workouts"
                title="Templates"
                desc="Explore the large catalogue of online workout templates crafted by experts in the field to help you achieve your goals. We have templates for everyone."
                images={[{ src: "/screenshots/device/4-workout-launch.webp", alt: "Workout Edit" }]}
                items={[
                    "Templates for Every Type of Lifter",
                    "Saveable and Editable",
                    "Personal Template Collections",
                ]}
                reverse={false}
                extra={
                    <ExploreButton title="Explore Templates" href="/workouts/templates" />
                }
            />
        </div>
    </div>
}