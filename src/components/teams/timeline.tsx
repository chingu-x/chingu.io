import type { TimelineItem } from "#/content/teams/timeline.ts";
import {Card, CardContent, CardHeader, CardTitle} from "#/components/ui/card.tsx";
import {Badge} from "#/components/ui/badge.tsx";

interface TimelineProps {
	items: TimelineItem[];
}



export function Timeline({ items }: TimelineProps) {
	return (
		<ol className="timeline">
			{items.map((item) => (
				<TimelineItem key={item.week} item={item} />
			))}
		</ol>
	);
}

// ==== Timeline Item

interface TimelineItemProps {
	item: TimelineItem;
}

const timelineItemCardStyles = `
	my-5
	shadow-sm
	ring-0
	border
	border-line
	hover:border-primary
`
const timelineItemMarkerStyles = `
	uppercase
	font-bold
	rounded-sm	
	px-2
	py-3
	mb-4
`

export function TimelineItem({ item }: TimelineItemProps) {
	return (
		<li>
			<Card className={timelineItemCardStyles}>
				<CardHeader>
					<Badge
						className={timelineItemMarkerStyles}
						style={{ backgroundColor: `var(--color-step-${item.step})`}}
					>{`wk ${item.week}`}</Badge>
					<CardTitle className="font-extrabold text-lg">{item.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-neutral-focus text-sm font-medium">{item.description}</p>
				</CardContent>
			</Card>
		</li>
	);
}
