import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { developerTypes } from "#/content/roles/developer-types.ts";
import { voyageComparison } from "#/content/teams/voyage-xp-comparison.ts";
import { Cards, ListCards } from "./cards";

const meta = {
	title: "Components/Shared/Cards",
	component: Cards,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeveloperTypes: Story = {
	args: {
		items: developerTypes,
	},
};

export const SingleCard: Story = {
	args: {
		items: [developerTypes[0]],
	},
};

export const TwoCards: Story = {
	args: {
		items: developerTypes.slice(0, 2),
	},
};

export const VoyageComparison: StoryObj = {
	render: () => <ListCards items={voyageComparison} />,
};
