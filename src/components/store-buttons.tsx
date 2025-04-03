import { Button } from "./ui/button"

import { FaGooglePlay, FaApple } from "react-icons/fa";

interface ButtonBaseProps {
    storeLink: string
    topText: string
    bottomText: string
    icon: JSX.Element
}

const ButtonBase = (props: ButtonBaseProps) => {
    return <a href={props.storeLink} rel="noopener noreferrer" target="_blank">
        <div className="flex items-center space-x-4 border px-4 py-2 rounded-2xl w-fit bg-muted hover:bg-background transition-colors duration-300">
            {props.icon}
            <div className="text-left w-[100px]">
                <div className="mb-1 text-xs">{props.topText}</div>
                <div className="-mt-1 font-sans text-sm font-semibold">{props.bottomText}</div>
            </div>
        </div>
    </a>
}

const ButtonStoreGoogle = () => {
    return <ButtonBase
        storeLink="https://play.google.com/store/apps/details?id=com.landersweb.workout_notepad_v2"
        topText="Get it on"
        bottomText="Google Play"
        icon={<FaGooglePlay size={24} />}
    />
}

const ButtonStoreApple = () => {
    return <ButtonBase
        storeLink="https://apps.apple.com/pk/app/workout-notepad/id6453561144"
        topText="Download on the"
        bottomText="App Store"
        icon={<FaApple size={24} />}
    />
}

export { ButtonStoreApple, ButtonStoreGoogle }