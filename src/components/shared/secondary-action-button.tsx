import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button.tsx";
import { cn } from "#/lib/utils.ts";

const buttonStyles = `
    px-6 py-7
    border-1 rounded-full
    font-bold
    text-base
    bg-white
    text-foreground    
    cursor-pointer
    
    hover:bg-foreground-100
    hover:border
    hover:border-foreground/15
    
`;

export function SecondaryActionButton({
	text,
	href,
	className,
}: {
	text: string;
	href: string;
	className?: string;
}) {
	return (
		<Link to={href}>
			<Button className={cn(buttonStyles, className)}>{text}</Button>
		</Link>
	);
}
