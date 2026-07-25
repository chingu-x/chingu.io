import type { ReactNode } from "react";
import { RolesHeaderBadge } from "#/components/roles/header-badge.tsx";
import { cn } from "#/lib/utils.ts";
import {rolesTypography} from "#/styles/roles.ts";

const baseStyles = `
    flex flex-col
    items-center
    gap-4
    pt-16
    pb-10
`

interface RolesContentSectionProps {
	id: string;
	variant?: "default" | "dark";
	headerBadgeText: string;
	headingText: string;
	className?: string;
	children: ReactNode;
}

export function RolesContentSection({
	id,
	variant = "default",
	headerBadgeText,
	headingText,
	className,
	children,
}: RolesContentSectionProps) {
	const variantClasses = {
		default: baseStyles,
		dark: "",
	};

	return (
		<section
			id={id}
			className={cn(variantClasses[variant], className)}
		>
			<RolesHeaderBadge text={headerBadgeText} />
			<h2 className={rolesTypography.h2}>{headingText}</h2>
			{children}
		</section>
	);
}
