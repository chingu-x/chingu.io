import { Link } from "@tanstack/react-router";
import { footerSections } from "#/content/footer.ts";

const footerStyles = `
    bg-(--color-footer-background)
    text-background/70
    mt-auto
`;

const footerStylesInner = `
    grid
    md:grid-cols-[1fr_1fr]
    lg:grid-cols-[2fr_1fr_1fr_1fr]
    gap-8
`;

const footerStylesBottom = `
    text-2xs font-bold uppercase
    text-background/50
    flex flex-col gap-4
    md:flex-row md:justify-between
    mt-12
`;

export function Footer() {
	return (
		<footer className={footerStyles}>
			<div className="max-w-(--max-content-width) mx-auto p-content-margin">
				<div className={footerStylesInner}>
					<div className="flex flex-col gap-4">
						<Link to="/">
							<div className="flex items-center cursor-pointer">
								<img
									src="/images/chingu-logo.svg"
									alt="logo"
									className="h-7 w-7"
								/>
								<span className="text-white text-xl font-semibold ml-2">
									Chingu
								</span>
							</div>
						</Link>
						<div className="max-w-75">Build real products with a cross-functional remote team.</div>
					</div>
					{footerSections.map((section) => {
						return (
							<div key={section.title}>
								<div className="text-primary font-bold uppercase text-2xs mb-6">
									{`// ${section.title}`}
								</div>
								{section.links.map((link) => {
									return (
										<div
											key={link.label}
											className="my-2 text-sm font-medium cursor-pointer hover:text-background"
										>
											{link.label}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
				<div className={footerStylesBottom}>
					<span>
						{`© chingu · free · volunteer-run · worldwide since 2016`}
					</span>
					<span>{`// build_real_products`}</span>
				</div>
			</div>
		</footer>
	);
}
