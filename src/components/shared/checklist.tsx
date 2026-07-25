import {rolesTypography} from "#/styles/roles.ts";

const listItemStyles = `
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
`

interface ChecklistItem {
	title: string;
	description: string;
}

interface ChecklistProps {
	items: ChecklistItem[];
}

export function Checklist({ items }: ChecklistProps) {
	return (
		<ul className="py-8 grid md:grid-cols-2 gap-4">
			{items.map((item) => (
				<li
					key={item.title}
					className={listItemStyles}
				>
					<strong className="mr-2">{item.title}</strong>
					<span className={rolesTypography.p}>
						{item.description}
					</span>
				</li>
			))}
		</ul>
	);
}
