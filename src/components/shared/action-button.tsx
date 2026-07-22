import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { cn } from "#/lib/utils.ts";
import { Button } from "@/components/ui/button";

const baseButtonStyles = `
  px-6 py-7
  border-0 rounded-full
  font-bold
  text-base
  gap-2
  cursor-pointer
  shadow-[0_8px_20px_rgba(76,81,91,0.1),inset_0_1px_0_rgba(245,245,245,0.18)]
  transition-[transform,box-shadow,background,color,border-color]
  transition-shadow hover:shadow-[0_0_36px_-10px_var(--color-primary)]
  duration-150
  ease-[var(--ease)]
  hover:gap-3 hover:pr-5
`;

const darkStyles = `
  ${baseButtonStyles}
  text-white  
`;

const lightStyles = `
  ${baseButtonStyles}
  text-foreground
  bg-background
  hover:text-background
`;

export function ActionButton({
	text,
	href,
	variant = "default",
	className,
}: {
	text: string;
	href: string;
	variant?: "dark" | "light" | "default";
	className?: string;
}) {
	const variantStyles = {
		light: lightStyles,
		dark: darkStyles,
		default: darkStyles,
	};

	return (
		<Link to={href}>
			<Button className={cn(variantStyles[variant], className)}>
				<div>{text}</div>
				<div>
					<IconArrowRight stroke={3} />
				</div>
			</Button>
		</Link>
	);
}
