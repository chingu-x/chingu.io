import {Link} from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const ghostButtonStyles = `
    px-6 py-5
    border-foreground/10 rounded-full
    font-bold
    gap-2
    cursor-pointer
    hover:border-foreground
    hover:text-primary
    hover:bg-background
`

export function GhostButton({
    text,
    href
}: {
    text: string,
    href?: string
}) {
    if (href) {
        return (
            <Link
                to={href}
                className={ghostButtonStyles}
            >
                {text}
            </Link>
        )
    }
    return (
        <Button
            variant="ghost"
            className={ghostButtonStyles}
        >
            {text}
        </Button>
    )
}