import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { JourneyNodesVoyagePaper } from "./journey-nodes-voyage";

const meta = {
	title: "Components/Home/JourneyNodesVoyagePaper",
	component: JourneyNodesVoyagePaper,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof JourneyNodesVoyagePaper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithPadding: Story = {
	render: () => (
		<div className="p-8 bg-gray-50">
			<JourneyNodesVoyagePaper />
		</div>
	),
};
