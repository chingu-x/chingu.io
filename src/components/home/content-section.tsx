// Content Sections in home/index page, that is not the hero and stats

import type { ReactNode } from "react";
import { HeadingBadge } from "#/components/home/heading-badge.tsx";
import { homeTypography as t } from "#/styles/home";

const baseSectionStyle = `
	flex flex-col gap-4 
	px-content-margin
	py-10
`;

const defaultSectionStyle = `
	${baseSectionStyle}
    w-full 
`;
export const darkSectionStyles = `
    ${baseSectionStyle}
    bg-background-100
`;

export const gradientSectionStyles = `
    ${baseSectionStyle}
    bg-[linear-gradient(180deg,rgba(247,248,250,0.72),rgba(255,255,255,0.9)),repeating-linear-gradient(0deg,rgba(22,23,26,0.04)_0_1px,transparent_1px_34px)]
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
	variant?: "default" | "dark" | "gradient";
	badgeText?: string;
	badgeVariant?: "default" | "dark";
	headingText?: string;
	ledeText?: string;
	children: ReactNode;
}) => {
	const variantStyles = {
		default: defaultSectionStyle,
		dark: darkSectionStyles,
		gradient: gradientSectionStyles,
	};

	return (
		<section id={id} className={variantStyles[variant]}>
			{badgeText && <HeadingBadge text={badgeText} variant={badgeVariant} />}
			{headingText && <h2 className={t.h2}>{headingText}</h2>}
			{ledeText && <p className={t.pSectionLede}>{ledeText}</p>}
			{children}
		</section>
	);
};
