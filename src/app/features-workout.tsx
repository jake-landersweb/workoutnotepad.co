import ExploreButton from "@/components/explore-button";
import ScreenshotSection from "@/components/screenshot-section/screenshot-section";

export default function FeaturesWorkout() {
    return <div className="center">
        <div className="mx-auto space-y-32">
            <ScreenshotSection
                header="workouts"
                title="Intuative Workout Builder"
                desc="We wanted to create a seamless experience for you to put together your workouts to minimize the friction there is when planning and editing workouts in real time."
                images={[
                    { src: "/screenshots/device/3-workout-edit.webp", alt: "Workout Edit" },
                ]}
                items={[
                    "Drag and Drop Editor",
                    "Specify Reps/Sets/Time",
                    "Super-Set Support",
                    "In-Progress Edits",
                ]}
                reverse={false}
            />
            <ScreenshotSection
                header="workouts"
                title="Immersive Workout Launcher"
                desc="Good data is the most important part to great visualization, so we give you a best-in-class experience to input your exercise data as simple as possible."
                images={[{ src: "/screenshots/device/4-workout-launch.webp", alt: "Workout Edit" }]}
                items={[
                    "Time Between Sets",
                    "Custom Tagging for Each Set",
                    "View Previous Set Data",
                    "Switch, Re-Order, Delete and More",
                ]}
                reverse={true}
            />
            <ScreenshotSection
                header="workouts"
                title="Templates"
                desc="Explore the large catalogue of online workout templates crafted by experts in the field to help you achieve your goals. We have templates for everyone."
                images={[{ src: "/screenshots/device/7-discover-home.webp", alt: "Workout Templates" }]}
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