import { IoIosInformationCircleOutline } from 'react-icons/io'
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function MarkdownRenderer({ content }: { content: string }) {
    const getNav = () => {
        const navItems: any[] = []
        const postLines = content.split("\n")
        const tempHeaders: any[] = []
        for (var i = 0; i < postLines.length; i++) {
            const line: string = postLines[i]
            if (line.startsWith("## ")) {
                const newTitle = line.split(" ")
                newTitle.shift()
                tempHeaders.push({ "title": newTitle.join(" "), "children": [] })
            }
            if (line.startsWith("### ")) {
                var last = tempHeaders.pop()
                const newTitle = line.split(" ")
                newTitle.shift()
                last['children'].push({ "title": newTitle.join(" "), "children": [] })
                tempHeaders.push(last)
            }
            if (line.startsWith("#### ")) {
                var last = tempHeaders.pop()
                var lastlast = last['children'].pop()
                const newTitle = line.split(" ")
                newTitle.shift()
                lastlast['children'].push({ "title": newTitle.join(" "), "children": [] })
                last['children'].push(lastlast)
                tempHeaders.push(last)
            }
        }

        for (var i = 0; i < tempHeaders.length; i++) {
            const currentHeader = tempHeaders[i]
            if (currentHeader['children'].length == 0) {
                navItems.push(createNavLink(currentHeader['title'], "text-lg font-medium text-txt-200 hover:text-main"))
            } else {
                const subHeaders: any[] = []
                // loop through children
                for (var j = 0; j < currentHeader['children'].length; j++) {
                    const subHeader = currentHeader['children'][j]
                    if (subHeader['children'].length == 0) {
                        subHeaders.push(createNavLink(subHeader['title'], "text-txt-400 hover:text-main"))
                    } else {
                        const subsubHeaders: any[] = []
                        for (var g = 0; g < subHeader['children'].length; g++) {
                            const subsubHeader = subHeader['children'][g]
                            subsubHeaders.push(createNavLink(subsubHeader['title'], "text-txt-500 hover:text-main"))
                        }
                        subHeaders.push(<div>{createNavLink(subHeader['title'], "text-txt-400 hover:text-main")}<div className="pl-4">{subsubHeaders}</div></div>)
                    }
                }
                navItems.push(<div>{createNavLink(currentHeader['title'], "text-lg font-medium text-txt-200 hover:text-main")}<div className="pl-4">{subHeaders}</div></div>)
            }
        }
        return navItems
    }

    const generateSlug = (str: string) => {

        str = str?.replace(/^\s+|\s+$/g, '')
        str = str?.toLowerCase()
        const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
        const to = 'aaaaaeeeeiiiioooouuuunc------'

        for (let i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
        }

        str = str?.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')

        return str
    }

    const createNavLink = (title: string, className: string = "") => {
        return <a className={`transition-all ${className}`} href={`#${generateSlug(title)}`}><p className="whitespace-nowrap">{title}</p></a>
    }

    const metadata = (name: string, value: string, icon: JSX.Element) => {
        return <div className="flex space-x-2 items-center bg-bg-sub border border-bg-acc rounded-md px-2 py-1">
            {icon}
            <div className="">
                <p className="text-xs font-light opacity-50">{name}</p>
                <p>{value}</p>
            </div>
        </div>
    }

    const MarkdownComponents: object = {
        code({ node, inline, className, ...props }) {
            return <div className=""></div>
        },
        blockquote({ node, inline, className, ...props }) {
            return <div className="pt-4 px-4 border border-bg-acc rounded-md">
                <div className="flex space-x-2 content-center text-txt-400">
                    <IoIosInformationCircleOutline size={20} />
                    <div className="font-mono text-sm">NOTE:</div>
                </div>
                <span {...props} />
            </div>
        },
        // remove large headers, as they are most likely a mistake
        h1: (props: any) => {
            return <div className=""></div>
        },
        h2: (props: any) => {
            const arr = props.children
            let heading = ''

            for (let i = 0; i < arr.length; i++) {
                if (arr[i]?.type !== undefined) {
                    for (let j = 0; j < arr[i].props.children.length; j++) {
                        heading += arr[i]?.props?.children[0]
                    }
                } else heading += arr[i]
            }

            const slug = generateSlug(heading)
            return <h2 id={slug} {...props}></h2>
        },
        h3: (props: any) => {
            const arr = props.children
            let heading = ''

            for (let i = 0; i < arr.length; i++) {
                if (arr[i]?.type !== undefined) {
                    for (let j = 0; j < arr[i].props.children.length; j++) {
                        heading += arr[i]?.props?.children[0]
                    }
                } else heading += arr[i]
            }

            const slug = generateSlug(heading)

            return <h3 id={slug} {...props}></h3>
        },
        h4: (props: any) => {
            const arr = props.children
            let heading = ''

            for (let i = 0; i < arr.length; i++) {
                if (arr[i]?.type !== undefined) {
                    for (let j = 0; j < arr[i].props.children.length; j++) {
                        heading += arr[i]?.props?.children[0]
                    }
                } else heading += arr[i]
            }

            const slug = generateSlug(heading)
            return <h4 id={slug} {...props}></h4>
        },
        p: (paragraph: { children?: boolean; node?: any }) => {
            const { node } = paragraph

            if (node.children[0].tagName === "img") {
                const image = node?.children[0]
                const metastring = image?.properties?.alt
                const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                const hasCaption = metastring?.toLowerCase().includes('{caption:')
                const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

                return (
                    <div className="postImgWrapper grid place-items-center">
                        <img src={image.properties.src} alt={alt} className={`postImg object-scale-down max-h-[500px]`} />
                        {hasCaption ? <div className="text-txt-400" aria-label={caption}>{caption}</div> : null}
                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },
        a: (anchor: { href: string; children: Array<any> }) => {
            if (anchor.href.match('http')) {
                return (
                    <a
                        href={anchor.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {anchor.children}
                    </a>
                )
            }
            return <a href={anchor.href}>{anchor.children}</a>
        },
    }

    return <div className="">
        <div className="flex flex-row-reverse" data-aos="fade-up" data-aos-offset="200" data-aos-delay="250">
            <div className="hidden md:block rounded-md border border-cell-300 bg-cell-200 ml-4 sticky inset-x-0 top-[70px] left-0 h-min max-h-[70vh] w-max">
                <div className="overflow-y-scroll max-h-[70vh]">
                    <p className="text-2xl font-bold text-center bg-cell-300 p-2 whitespace-nowrap sticky top-0">Table of Contents</p>
                    <div className="p-4">
                        {getNav()}
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="md:hidden rounded-md border border-cell-200 bg-cell-200">
                    <p className="text-2xl font-bold text-center bg-cell-300 p-2 whitespace-nowrap sticky top-0 rounded-t-md">Table of Contents</p>
                    <div className="p-4">
                        {getNav()}
                    </div>
                </div>
                <div className="grid grid-cols-4 place-items-center">
                    <div className="prose prose-stone prose-a:text-main hover:prose-a:opacity-50 transiton-all max-w-full col-span-4 prose-headings:text-main">
                        <ReactMarkdown components={MarkdownComponents}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
}