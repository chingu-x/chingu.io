import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button.tsx";
import { cn } from "#/lib/utils.ts";

const buttonStyles = `
    px-6 py-7
    border-1 rounded-full
    border-line
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
	openInNewTab,
	className,
}: {
	text: string;
	href: string;
	openInNewTab?: boolean;
	className?: string;
}) {
	return (
		<Link to={href} target={openInNewTab ? "_blank" : undefined}>
			<Button className={cn(buttonStyles, className)}>{text}</Button>
		</Link>
	);
}
