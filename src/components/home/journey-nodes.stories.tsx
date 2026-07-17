import type { Meta, StoryObj } from "@storybook/react";
import { journeyNodes } from "#/content/home/journey-nodes";
import { JourneyNodesSection } from "./journey-nodes";

const meta = {
	title: "Components/Home/JourneyNodes",
	component: JourneyNodesSection,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof JourneyNodesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllNodes: Story = {
	args: {},
};

export const FirstNode: Story = {
	render: () => {
		// Create a minimal story showing just the first node
		return (
			<div className="w-96">
				<ol className="journey-nodes">
					<li aria-label={journeyNodes[0].ariaLabel}>
						<div className="p-4 flex gap-4 group">
							<div className="flex items-center gap-4">
								<button
									type="button"
									className="h-14 w-14 rounded-full flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.15)] group-hover:shadow-none transition-shadow duration-200"
									style={{
										outline: `2px solid var(--color-step-${journeyNodes[0].step})`,
										outlineOffset: "-2px",
									}}
								>
									<span
										className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
										style={{
											backgroundColor: `var(--color-step-${journeyNodes[0].step})`,
										}}
									>
										{journeyNodes[0].week}
									</span>
								</button>
								<div className="flex flex-col gap-1">
									<span className="text-primary text-xs uppercase font-bold">
										{`Week ${journeyNodes[0].week}`}
									</span>
									<span className="text-base font-bold">
										{journeyNodes[0].phase}
									</span>
								</div>
							</div>

							<div className="hidden group-hover:block">
								<div>
									<h3 className="text-base font-bold">
										{journeyNodes[0].title}
									</h3>
									<p className="text-sm font-medium text-neutral-focus">
										{journeyNodes[0].description}
									</p>
									<span className="mt-3 p-3 text-xs font-bold uppercase inline-block">
										{journeyNodes[0].skill}
									</span>
								</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
		);
	},
};
