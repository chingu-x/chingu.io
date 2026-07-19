import {
	type JourneyNode,
	journeyNodes,
} from "#/content/home/journey-nodes.ts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const stepButtonStyles = `
	h-14 w-14 
	rounded-full 
	flex items-center justify-center 
	shadow-[0_2px_12px_rgba(0,0,0,0.15)] 
	group-hover:shadow-none 
	transition-shadow duration-200
`;

export const JourneyNodesSection = () => {
	return (
		<Card className="p-4 shadow-lg min-w-72">
			<ol className="journey-nodes" aria-label="Seven-week Voyage journey">
				{journeyNodes.map((node) => (
					<JourneyNodeItem key={node.week} node={node} />
				))}
			</ol>
		</Card>
	);
};

export const JourneyNodeItem = ({ node }: { node: JourneyNode }) => {
	return (
		<li aria-label={node.ariaLabel}>
			<Card className="p-4 flex gap-4 group">
				<div className="flex items-center gap-4">
					<button
						type="button"
						className={stepButtonStyles}
						style={{
							outline: `2px solid var(--color-step-${node.step})`,
							outlineOffset: "-2px",
						}}
					>
						<span
							className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
							style={{ backgroundColor: `var(--color-step-${node.step})` }}
						>
							{node.week}
						</span>
					</button>
					<div className="flex flex-col gap-1">
						<span className="text-primary text-xs uppercase font-bold">{`Week ${node.week}`}</span>
						<span className="text-base font-bold">{node.phase}</span>
					</div>
				</div>

				<div className="journey-pop hidden group-hover:block">
					<div className="journey-pop-inner">
						<h3 className="text-base font-bold">{node.title}</h3>
						<p className="text-sm font-medium text-neutral-focus">
							{node.description}
						</p>
						<Badge className="mt-3 p-3 text-xs font-bold uppercase" style={{
							backgroundColor: `color-mix(in srgb, var(--color-step-${node.step}) 10%, transparent)`,
							color: `var(--color-step-${node.step})`
						}}>{node.skill}</Badge>
					</div>
				</div>
			</Card>
		</li>
	);
};
