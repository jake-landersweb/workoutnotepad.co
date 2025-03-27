import SectionHeader from "@/components/section-header";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function ViewWorkouts() {

    return <div className="pt-16 center">
        <div className="mx-auto space-y-16">
            <Section
                header="workouts"
                title="Intuative Workout Builder"
                desc="We wanted to create a seamless experience for you to put together your workouts to minimize the friction there is when planning and editing workouts in real time."
                image="/screenshots/device/3-workout-edit.webp"
                imageAlt="Workout Edit"
                items={[
                    "Drag and Drop Editor",
                    "Specify Reps/Sets/Time",
                    "Super-Set Support",
                    "In-Progress Edits",
                ]}
                reverse={false}
            />
            <Section
                header="workouts"
                title="Immersive Workout Launcher"
                desc="Good data is the most important part to great visualization, so we give you a best-in-class experience to input your exercise data as simple as possible."
                image="/screenshots/device/4-workout-launch.webp"
                imageAlt="Workout Edit"
                items={[
                    "Time Between Sets",
                    "Custom Tagging for Each Set",
                    "View Previous Set Data",
                    "Switch, Re-Order, Delete and More",
                ]}
                reverse={true}
            />
            <Section
                header="workouts"
                title="Templates"
                desc="Explore the large catalogue of online workout templates crafted by experts in the field to help you achieve your goals. We have templates for everyone."
                image="/screenshots/device/4-workout-launch.webp"
                imageAlt="Workout Edit"
                items={[
                    "Templates for Every Type of Lifter",
                    "Saveable and Editable",
                    "Personal Template Collections",
                ]}
                reverse={false}
            />
        </div>
    </div>
}

type SectionProps = {
    header: string
    title: string
    desc: string
    image: string
    imageAlt: string
    items: string[]
    reverse?: boolean
}

const Section = (props: SectionProps) => {

    const checkItem = (text: string) => {
        return <div className="flex items-center space-x-2">
            <FaCheck size={15} className="text-primary" />
            <p>{text}</p>
        </div>
    }

    return <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center px-8">
        <div className={`space-y-4 ${props.reverse ?? false ? "order-2" : "order-1"}`}>
            <SectionHeader title={props.header} />
            <div className="space-y-4 md:max-w-md">
                <h4 className="txt-header">{props.title}</h4>
                <p className="txt-body">{props.desc}</p>
                <div className="space-y-2">
                    {props.items.map((item, i) => <div key={`check-item-${i}`}>{checkItem(item)}</div>)}
                </div>
            </div>
        </div>
        <div className={`w-fit mx-auto pt-8 ${props.reverse ?? false ? "order-1" : "order-2"}`}>
            <Image src={props.image} alt={props.imageAlt} height={300} width={300} />
        </div>
    </div>
}