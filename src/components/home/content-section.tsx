// Content Sections in home/index page, that is not the hero and stats

import type { ReactNode } from "react";
import { HeadingBadge } from "#/components/home/heading-badge.tsx";
import { homeTypography as t } from "#/components/shared/styles/home";

const baseSectionStyle = `
	flex flex-col gap-4 
	px-content-margin
	py-10
`

const defaultSectionStyle = `
	${baseSectionStyle}
    w-full 
`;
export const darkSectionStyles = `
    ${baseSectionStyle}
    px-content-margin
    bg-background-100
`;

export const ContentSection = ({
	id,
	variant = "default",
	badgeText,
	badgeVariant = "default",
	headingText,
	ledeText,
	children,
}: {
	id: string;
	variant?: "default" | "dark";
	badgeText: string;
	badgeVariant?: "default" | "dark";
	headingText: string;
	ledeText: string;
	children: ReactNode;
}) => {
	return (
		<section
			id={id}
			className={variant === "dark" ? darkSectionStyles : defaultSectionStyle}
		>
			<HeadingBadge text={badgeText} variant={badgeVariant} />
			<h2 className={t.h2}>{headingText}</h2>
			<p className={t.pSectionLede}>{ledeText}</p>
			{children}
		</section>
	);
};
