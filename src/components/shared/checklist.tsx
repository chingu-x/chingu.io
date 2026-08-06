import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";
import type {
	ChecklistItem,
	ChecklistItemCompact,
} from "#/types/content/checklist.ts";

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

interface ChecklistProps {
	items: ChecklistItem[] | ChecklistItemCompact[];
	columnLayout?: "flex" | "single";
	spacing?: "default" | "sm";
}

export function Checklist({
	items,
	columnLayout = "flex",
	spacing = "default",
}: ChecklistProps) {
	const baseULStyles = `py-8 grid gap-4`;
	const ulLayoutStyles = {
		flex: `${baseULStyles} md:grid-cols-2`,
		single: `${baseULStyles}`,
	};
	const ulSpacingStyles = {
		default: "",
		sm: "gap-2",
	};

	return (
		<ul className={cn(ulLayoutStyles[columnLayout], ulSpacingStyles[spacing])}>
			{items.map((item) => (
				<li key={item.key} className={listItemStyles}>
					{"title" in item && <strong className="mr-2">{item.title}</strong>}
					<span className={sharedTypography.p}>{item.description}</span>
				</li>
			))}
		</ul>
	);
}
