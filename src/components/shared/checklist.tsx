import { rolesTypography } from "#/styles/roles.ts";

export const listItemStyles = `
	relative pl-5	
	before:content-[''] 
	before:absolute 
	before:left-0 
	before:top-[0.62em] 
	before:w-2 
	before:h-2 
	before:rounded-full 
	before:bg-primary 
	before:shadow-[0_0_8px_var(--primary-glow)]
`;

interface ChecklistItem {
	title?: string;
	description: string;
}

interface ChecklistProps {
	items: ChecklistItem[];
	column?: "flex" | "single";
}

export function Checklist({ items, column = "flex" }: ChecklistProps) {
	const baseULStyles = `py-8 grid gap-4`;
	const ulStyles = {
		flex: `${baseULStyles} md:grid-cols-2`,
		single: `${baseULStyles}`,
	};

	return (
		<ul className={ulStyles[column]}>
			{items.map((item) => (
				<li key={item.title} className={listItemStyles}>
					<strong className="mr-2">{item.title}</strong>
					<span className={rolesTypography.p}>{item.description}</span>
				</li>
			))}
		</ul>
	);
}
