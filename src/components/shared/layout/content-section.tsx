import type { ReactNode } from "react";
import { RolesHeaderBadge } from "#/components/shared/header-badge.tsx";
import { cn } from "#/lib/utils.ts";
import {rolesTypography} from "#/styles/roles.ts";

const baseStyles = `
    flex flex-col
    md:items-center
    gap-4
    pt-16
    pb-10
    px-content-margin
`

interface RolesContentSectionProps {
	id: string;
	variant?: "default" | "dark";
	headerBadgeText?: string;
	headingText?: string;
	lede?: string;
	className?: string;
	children: ReactNode;
}

export function RolesContentSection({
	id,
	variant = "default",
	headerBadgeText,
	headingText,
	lede,
	className,
	children,
}: RolesContentSectionProps) {
	const variantClasses = {
		default: baseStyles,
		dark: `${baseStyles} bg-primary-foreground/78 border-y-1 border-line`,
	};

	return (
		<section
			id={id}
			className={cn(variantClasses[variant], className)}
		>
			{headerBadgeText && <RolesHeaderBadge text={headerBadgeText} />}
			{headingText && <h2 className={rolesTypography.h2}>{headingText}</h2>}
			{lede && <p className={rolesTypography.lede}>{lede}</p>}
			{children}
		</section>
	);
}
