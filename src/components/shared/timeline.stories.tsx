import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { applyTimeline } from "#/content/apply/timeline.ts";
import { Timeline, TimelineItem } from "./timeline.tsx";

const meta = {
	title: "Components/Shared/Timeline",
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
	render: () => <TimelineItem item={applyTimeline[0]} />,
};

export const FlexLayout: Story = {
	args: {
		items: applyTimeline,
		columnLayout: "flex",
	},
};

export const SingleLayout: Story = {
	args: {
		items: applyTimeline,
		columnLayout: "single",
	},
};