import { Badge } from "@/components/ui/badge";
import {cva} from "class-variance-authority";
import {cn} from "#/lib/utils.ts";

const badgeStyles = cva(`
    uppercase
    font-bold
    p-3
`, {
    variants: {
        variant: {
            default: "text-primary bg-primary/10 ",
            dark:"",
        }
    }
})

export function HeadingBadge({
    text,
    variant = "default",
    className
}:{
    text: string,
    variant?: "default" | "dark"
    className?: string
}){
    return (
        <Badge className={cn(badgeStyles({variant}), className)}>
            {text}
        </Badge>
    )
}