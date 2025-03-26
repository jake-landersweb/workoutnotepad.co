import { menuItems } from "@/lib/menu";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
    };
    tagline?: string;
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer = ({
    logo = {
        src: "/dumbbell.png",
        alt: "Workout Notepad Logo",
        url: "/",
    },
    tagline = "The workout notepad replacement.",
    copyright = "© 2025 Copyright. All rights reserved.",
    bottomLinks = [
        { text: "Terms and Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
    ],
}: FooterProps) => {
    return (
        <section className="pt-8 border border-t px-8">
            <div className="">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 max-w-[1800px] mx-auto">
                        <div className="col-span-2 lg:col-span-1 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <Link href={logo.src}>
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            height="50"
                                            width="50"
                                            className="shrink-0"
                                        />
                                        <h3 className="text-xl font-semibold">Workout Notepad</h3>
                                    </div>
                                </Link>
                            </div>
                            <p className="mt-4 font-medium">{tagline}</p>
                        </div>
                        <div className={`grid grid-cols-2 lg:grid-cols-${menuItems.length} gap-8 col-span-2`}>
                            {menuItems.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-4 font-bold">{section.title}</h3>
                                    <ul className="space-y-4 text-muted-foreground">
                                        {section.links.map((link, linkIdx) => (
                                            <li
                                                key={linkIdx}
                                                className="font-medium hover:text-primary"
                                            >
                                                <a href={link.href}>{link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 justify-between gap-4 border-t py-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="underline hover:text-primary">
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer };
