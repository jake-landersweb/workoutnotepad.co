import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react"
import { cn } from "@/lib/utils"


type HeaderItem = {
    title: string
    href: string
    description: string
}

export default function Header() {
    const features: HeaderItem[] = [
        {
            title: "AI Consulting",
            href: "/ai",
            description: "Learn how we use AI intelligently to enhance your business.",
        },
        {
            title: "App Development",
            href: "/app-development",
            description: "Web, desktop, and mobile app development built natively for you.",
        },
        {
            title: "Infrastructure",
            href: "/infrastructure",
            description: "Servers, databases, authentication, and more.",
        },
    ]

    const products: HeaderItem[] = [
        {
            title: "Workout Notepad",
            href: "workout-notepad",
            description: "Powerful but flexible exercise mobile application.",
        },
        {
            title: "Crosscheck Sports",
            href: "crosscheck-sports",
            description: "Power your own sports team with a feature-rich web and mobile app.",
        },
        {
            title: "AI Thing",
            href: "ai-thing",
            description: "State of the art AI development platform to power your integrations.",
        },
    ]

    const download: HeaderItem[] = [
        {
            title: "App Store",
            href: "https://apps.apple.com/pk/app/workout-notepad/id6453561144",
            description: "Download today on the Apple App Store.",
        },
        {
            title: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.landersweb.workout_notepad_v2",
            description: "Download today on the Google Play Store.",
        },
    ]

    const createItems = (data: HeaderItem[], useLarge: boolean = true) => {
        if (useLarge) {
            return <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {data.map((component) => (
                    <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                    >
                        {component.description}
                    </ListItem>
                ))}
            </ul>
        } else {
            return <ul className="grid w-full gap-3 p-4 md:grid-cols-2">
                {data.map((component) => (
                    <ListItemSmall
                        key={component.title}
                        title={component.title}
                        href={component.href}
                    >
                        {component.description}
                    </ListItemSmall>
                ))}
            </ul>
        }
    }

    return <header className="sticky top-0 z-50 bg-background border-b flex h-16 items-center gap-4 px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <Image
                    src="/dumbbell.png"
                    alt="W. Notepad Logo"
                    height="50"
                    width="50"
                    className="shrink-0"
                />
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {createItems(features)}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {createItems(products)}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Download</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {createItems(download)}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="https://docs.workoutnotepad.co" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Docs
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>

            </SheetTrigger>
            <Image
                src="/dumbbell.png"
                alt="W. Notepad Logo"
                height="50"
                width="50"
                className="shrink-0 md:hidden"
            />
            <SheetContent side="left" className="h-full overflow-scroll pb-16">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold"
                    >
                        <Image
                            src="/dumbbell.png"
                            alt="W. Notepad Logo"
                            height="30"
                            width="30"
                            className="shrink-0"
                        />
                    </Link>
                    <div className="">
                        <h3>Features</h3>
                        {createItems(features, false)}
                    </div>
                    <div className="">
                        <h3>Products</h3>
                        {createItems(products, false)}
                    </div>
                    <div className="">
                        <h3>Download</h3>
                        {createItems(download, false)}
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    </header>
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

const ListItemSmall = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <a
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </a>
        </li>
    )
})