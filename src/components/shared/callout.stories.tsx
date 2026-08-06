import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Callout, CalloutFrame } from "./callout";

const meta = {
	title: "Components/Shared/Callout",
	component: Callout,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		headerBadgeText: "No paywall, no investors",
		title: "Volunteer-run and community-funded.",
		sectionLedge:
			"We sustain ourselves on the time of members and industry pros who want to keep growing and giving back.",
		actionButtonText: "Read the full story",
		href: "/community/why-its-free",
		showPricingFooter: true,
	},
};

export const WithoutAction: Story = {
	args: {
		headerBadgeText: "Join us",
		title: "Build something amazing.",
		sectionLedge: "Connect with a global community of builders.",
		showPricingFooter: false,
	},
};

export const CustomFrame: StoryObj = {
	parameters: {
		docs: {
			description: {
				story:
					"Use CalloutFrame as a container for any custom content. It switches to 2 column layout at lg",
			},
		},
	},
	render: () => (
		<CalloutFrame>
			<p>
				“Stuff like this (not just Chingu, but any kind of volunteer or
				low-bar-of-entry work that gets you building with other humans) is VITAL
				for building soft skills.”
			</p>
			<p>— Emily C., Web Developer and Voyage alum</p>
		</CalloutFrame>
	),
};
