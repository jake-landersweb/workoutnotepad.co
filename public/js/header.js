Alpine.data('menu', () => ({
    open: false,
    openTimer: null,
    closeTimer: null,
    footerItems: [
        { href: "/screenshots", title: "Screenshots" },
        { href: "/support", title: "Support" },
        { href: "/privacy-policy", title: "Privacy Policy" },
        { href: "https://sapphirenw.com", title: "Our Company", external: true },
        { href: "https://blog.workoutnotepad.co", title: "Blog", external: true }
    ],

    toggle() {
        this.open = !this.open
    },
    hoverOn() {
        if (window.innerWidth >= 768) {
            clearTimeout(this.closeTimer)
            this.openTimer = setTimeout(() => { this.open = true }, 250)
        }
    },
    hoverOff() {
        if (window.innerWidth >= 768) {
            clearTimeout(this.openTimer)
            this.closeTimer = setTimeout(() => { this.open = false }, 200)
        }
    }
}));