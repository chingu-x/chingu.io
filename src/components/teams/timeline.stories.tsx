import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { voyageTimeline } from "#/content/teams/voyage-timeline.ts";
import { Timeline, TimelineItem } from "./timeline";

const meta = {
	title: "Components/Teams/Timeline",
	component: Timeline,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleItem: {
	parameters: undefined;
	render: () => React.JSX.Element;
} = {
	parameters: undefined,
	render: () => <TimelineItem item={voyageTimeline[0]} />,
};

export const Full: Story = {
	args: {
		items: voyageTimeline,
	},
};
