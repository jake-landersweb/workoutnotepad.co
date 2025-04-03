import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
import { MenuItem, menuItems } from "@/lib/menu"


export default function Header() {
    const createItems = (item: MenuItem, useLarge: boolean = true) => {
        if (useLarge) {
            return <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.links.map((component) => (
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
                {item.links.map((component) => (
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

    return <header className="sticky top-4 z-50 bg-background/30 backdrop-blur-2xl border rounded-[20px] flex h-16 items-center gap-4 px-4 mx-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 justify-between w-full">
            <div className="md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src="/dumbbell.png"
                        alt="Workout Notepad"
                        height="50"
                        width="50"
                        className="shrink-0"
                    />
                    <h1 className="text-xl font-semibold md:text-lg">Workout Notepad</h1>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((item, index) => <NavigationMenuItem key={`header-item-lg-${index}`}>
                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {createItems(item)}
                            </NavigationMenuContent>
                        </NavigationMenuItem>)}
                        <NavigationMenuItem>
                            <Link href="https://blog.workoutnotepad.co" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} rel="noopener noreferrer" target="_blank">
                                    Blog
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
        <Sheet>
            <SheetTrigger className="md:hidden" asChild>
                <div className="">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </div>
            </SheetTrigger>
            <Link
                href="/"
                className="flex items-center gap-2 md:hidden"
            >
                <Image
                    src="/dumbbell.png"
                    alt="Workout Notepad"
                    height="50"
                    width="50"
                    className="shrink-0"
                />
                <h1 className="text-xl font-semibold md:text-lg">Workout Notepad</h1>
            </Link>
            <SheetContent side="left" className="h-full overflow-scroll pb-16">
                <SheetHeader className="pb-4">
                    <SheetTitle>
                        <Link
                            href="/"
                            className="flex items-center gap-2 md:hidden"
                        >
                            <Image
                                src="/dumbbell.png"
                                alt="Workout Notepad"
                                height="50"
                                width="50"
                                className="shrink-0"
                            />
                            <h1 className="text-xl font-semibold md:text-lg">Workout Notepad</h1>
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <nav className="grid gap-6 text-lg font-medium">
                    {menuItems.map((item, index) => <div key={`header-item-sm-${index}`}>
                        <h3>{item.title}</h3>
                        {createItems(item, false)}
                    </div>)}
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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