import { Badge } from "@/components/ui/badge";

export const RolesHeaderBadge = ( {
        text,
        variant = "section",
        cornerSize = "sm"
    }: {
        text: string,
        variant?: "hero" | "section",
        cornerSize?: "sm" | "md" | "lg" | "full"
    }) =>{
    return <Badge
        variant="outline"
        className={`rounded-${cornerSize} font-bold p-4 uppercase text-primary border-primary/30 bg-primary/10`}
    >
        {variant === "hero" &&
            <div className="w-1.5 h-1.5 mr-2 rounded-full bg-primary"></div>
        }
        {text}
    </Badge>
}