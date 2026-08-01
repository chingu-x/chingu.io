import type { ReactNode } from "react";
import { RolesHeaderBadge } from "#/components/shared/header-badge.tsx";
import { cn } from "#/lib/utils.ts";
import { rolesTypography } from "#/styles/roles.ts";

const baseStyles = `
    flex flex-col
    md:items-center
    gap-4
    pt-16
    pb-10
    px-content-margin
`;

interface ContentSectionProps {
	id: string;
	variant?: "default" | "dark";
	headerBadgeText?: string;
	headingText?: string;
	textAlignment?: "default" | "center";
	lede?: string;
	className?: string;
	children?: ReactNode;
}

export function ContentSection({
	id,
	variant = "default",
	headerBadgeText,
	headingText,
	lede,
	className,
	children,
}: ContentSectionProps) {
	const variantClasses = {
		default: baseStyles,
		dark: `${baseStyles} bg-primary-foreground/78 border-y-1 border-line`,
	};

	return (
		<section id={id} className={cn(variantClasses[variant], className)}>
			{headerBadgeText && <RolesHeaderBadge text={headerBadgeText} />}
			{headingText && <h2 className={rolesTypography.h2}>{headingText}</h2>}
			{lede && <p className={rolesTypography.lede}>{lede}</p>}
			{children}
		</section>
	);
}
