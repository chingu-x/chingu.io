import { Badge } from "@/components/ui/badge";



interface TagCloudProps {
	tags: string[];
}

export function TagCloud({ tags }: TagCloudProps) {
	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => (
				<Badge
					key={tag}
					className="rounded-sm p-3 uppercase font-bold text-neutral-focus bg-foreground-100 border-line"
				>
					{tag}
				</Badge>
			))}
		</div>
	);
}
