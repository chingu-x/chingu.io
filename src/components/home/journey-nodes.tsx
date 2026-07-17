import {
	type JourneyNode,
	journeyNodes,
} from "#/content/home/journey-nodes.ts";
import { Card } from "@/components/ui/card";

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

const JourneyNodeItem = ({ node }: { node: JourneyNode }) => {
	return (
		<li aria-label={node.ariaLabel}>
			<Card className="p-4 flex gap-4 group">
				<div className="flex items-center gap-4">
					<button
						type="button"
						className="h-10 w-10 rounded-full ring-2 flex items-center justify-center"
						style={{ boxShadow: `0 0 0 2px var(--color-step-${node.step})` }}
					>
						<span
							className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
							style={{ backgroundColor: `var(--color-step-${node.step})` }}
						>
							{node.week}
						</span>
					</button>
					<div className="flex flex-col">
						<span className="journey-week">{`Week ${node.week}`}</span>
						<span className="journey-phase">{node.phase}</span>
					</div>
				</div>

				<div className="journey-pop hidden group-hover:block">
					<div className="journey-pop-inner">
						<h3>{node.title}</h3>
						<p>{node.description}</p>
						<span className="journey-skill">{node.skill}</span>
					</div>
				</div>
			</Card>
		</li>
	);
};
