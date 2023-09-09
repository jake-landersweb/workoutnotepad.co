"use client"

import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactUp } from 'react-icons/bs'
import Link from "./link";
import SafeArea from "./safeArea";
import DownloadButtons from "./donwloadButtons";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const footer = () => {
        return <div className="md:flex justify-between items-center w-full space-y-16 md:space-y-0">
            <div className="">
                <div className="space-y-8">
                    <div className="space-y-2 px-4">
                        <h3 className="text-2xl text-center text-txt-400">The Gym Notebook Replacement</h3>
                        <div className="h-[1px] w-full bg-cell-400"></div>
                    </div>
                    <DownloadButtons />
                </div>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-txt-300">Resources</h2>
                <ul className="text-txt-100">
                    <li className="mb-4">
                        <Link props={{
                            href: "/support",
                            child: <>Support</>,
                            isExternal: false,
                            className: "hover:underline"
                        }} />
                    </li>
                    <li className="mb-4">
                        <Link props={{
                            href: "/privacy-policy",
                            child: <>Privacy Policy</>,
                            isExternal: false,
                            className: "hover:underline"
                        }} />
                    </li>
                    <li className="mb-4">
                        <Link props={{
                            href: "https://sapphirenw.com",
                            child: <>Our Company</>,
                            isExternal: true,
                            className: "hover:underline"
                        }} />
                    </li>
                </ul>
            </div>
        </div>
    }

    return <div className="w-screen bg-cell-200 px-8 py-4 shadow-2xl z-50">
        <SafeArea>
            <div className={`flex justify-between`}>
                <div className="w-fit">
                    <Link props={{
                        href: "/",
                        child: <div className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
                            <Image src={"/dumbbell.png"} alt={"Workout Notepad Icon"} height={60} width={60} />
                            <h1 className="text-3xl font-medium tracking-tight">Workout Notepad</h1>
                        </div>,
                        isExternal: false,
                        className: undefined
                    }} />
                </div>

                <button className={`transition-all duration-500 ${toggle ? 'rotate-180' : ''}`} onClick={() => setToggle(!toggle)}>
                    <BsChevronCompactUp className="text-cell-700" size={30} />
                </button>
            </div>
            <div className={`transition-all duration-500 ${toggle ? 'h-[80vh] md:h-[40vh] opacity-100' : 'h-0 opacity-0'} overflow-hidden flex items-center justify-start"`}>
                {footer()}
            </div>
        </SafeArea>
    </div>
}