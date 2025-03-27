export default function SectionHeader({ title }: { title: string }) {
    return <div className="space-y-2">
        <div className="bg-primary dark:bg-foreground w-[50px] h-[1px]" />
        <h3 className="text-primary dark:text-foreground font-light uppercase">{title}</h3>
    </div>
}