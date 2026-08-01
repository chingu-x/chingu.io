import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { developerSkills } from "#/content/roles/developer-skills.ts";
import { voyageMentorship } from "#/content/teams/voyage-xp-mentorship.ts";
import { Checklist } from "./checklist";

const meta = {
	title: "Components/Shared/Checklist",
	component: Checklist,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Checklist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeveloperSkills: Story = {
	args: {
		items: developerSkills,
	},
};

export const SingleItem: Story = {
	args: {
		items: [developerSkills[0]],
	},
};

export const TwoItems: Story = {
	args: {
		items: developerSkills.slice(0, 2),
	},
};
