export interface MenuItem {
    title: string;
    links: {
        title: string;
        href: string;
        external?: boolean;
        description: string;
        icon?: string;
    }[];
}

export const menuItems: MenuItem[] = [
    {
        title: "Features",
        links: [
            {
                title: "Workout Builder",
                href: "/features/workouts#builder",
                description: "We offer a state of the art workout builder you will actually enjoy using.",
            },
            {
                title: "Immersive Workout Launcher",
                href: "/features/workouts#launcher",
                description: "Our workout launcher takes all distractions and shows you just what you need to see.",
            },
            {
                title: "Customizable Exercise Bank",
                href: "/features/exercises",
                description: "We provide you with many exericses, but feel free to add your own.",
            },
            {
                title: "Downloadable Templates",
                href: "/templates",
                description: "Updated weekly, we work with experts in the industry to craft training templates.",
            },
            {
                title: "Insights",
                href: "/features/visualization#insights",
                description: "Based on your training data, we provide an insights engine to offer advice.",
            },
            {
                title: "Advanced Graphs",
                href: "/features/visualization#graphs",
                description: "Data is power, and we want to put that power in your hands.",
            },
            {
                title: "Graph Builder",
                href: "/features/visualization#graph-builder",
                description: "Data is power, and we want to put that power in your hands.",
            },
            {
                title: "Post-Workout Report",
                href: "/features/visualization#post-workout-report",
                description: "Auto-generated post-workout reports for your knowledge.",
            },
        ],
    },
    {
        title: "Download",
        links: [
            {
                title: "For iOS",
                href: "/download#ios",
                description: "Download our application on the App Store.",
            },
            {
                title: "For Android",
                href: "/download#android",
                description: "Download our application on the Google Play Store.",
            },
        ],
    },
    {
        title: "Pricing",
        links: [
            {
                title: "No Ads, Ever",
                href: "/pricing#ads",
                description: "We have a strict no-advertisement policy to keep your head clear to exercise.",
            },
            {
                title: "Premium",
                href: "/pricing#premium",
                description: "View our reasonable premium tier, and what you gain with that.",
            },
        ],
    },
    {
        title: "More",
        links: [
            {
                title: "Docs",
                href: "https://docs.workoutnotepad.co",
                external: true,
                description: "Learn more about how the app works on our documentation site.",
            },
            {
                title: "Blog",
                href: "https://blog.workoutnotepad.co",
                external: true,
                description: "View our blog regularly updated with fitness content.",
            },
            {
                title: "Support",
                href: "/support",
                description: "Need extra help? We are here to answer any question that you may have.",
            },
        ],
    },
    // {
    //     title: "Contact",
    //     links: [
    //         {
    //             title: "About Us",
    //             href: "/about",
    //             description: "We focus on creating genuine, long-tenured relationships with our clients.",
    //         },
    //         {
    //             title: "Contact",
    //             href: "/contact",
    //             description: "Schedule a free talk to discuss how our offerings can work for you.",
    //         },
    //     ],
    // },
]