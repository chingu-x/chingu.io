import { cn } from "#/lib/utils.ts";
import { Badge } from "@/components/ui/badge";

const baseBadgeStyles = `
    p-4
    font-bold
    uppercase text-primary 
    border-primary/30 
    bg-primary/10 
    self-start 
    md:self-center
`

export const RolesHeaderBadge = ({
	text,
	variant = "section",
	cornerSize = "sm",
}: {
	text: string;
	variant?: "hero" | "section";
	cornerSize?: "sm" | "md" | "lg" | "full";
}) => {
	return (
		<Badge
			variant="outline"
			className={cn(baseBadgeStyles, `rounded-${cornerSize}`)}
		>
			{variant === "hero" && (
				<div className="w-1.5 h-1.5 mr-2 rounded-full bg-primary"></div>
			)}
			{text}
		</Badge>
	);
};
