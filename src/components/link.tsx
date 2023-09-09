type LinkProps = {
    href: string
    child: JSX.Element
    isExternal?: boolean
    className?: string
}

const Link = ({ props }: { props: LinkProps }) => {
    const { href, child, isExternal = false, className = "" } = props
    if (isExternal) {
        return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{child}</a>
    } else {
        return <a href={href}><div className={className}>{child}</div></a>
    }
}

export default Link