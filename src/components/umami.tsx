import Script from 'next/script'

export default function UmamiAnalytics() {
    const umamiSrc = "https://umami.hetzner.sapphirenw.com/script.js"
    const umamiId = "543a0329-fa31-417c-8900-837862f8b275"

    if (!umamiSrc || !umamiId) {
        console.error('Umami Analytics is not configured.')
        return null
    }

    return (
        <Script
            id="umami-analytics"
            src={umamiSrc}
            data-website-id={umamiId}
            strategy="afterInteractive"
            async
        />
    )
}