import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { developerWordcloud } from "#/content/roles/developer-wordcloud.ts";
import { TagCloud } from "./tag-cloud";

const meta = {
	title: "Components/Shared/TagCloud",
	component: TagCloud,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TagCloud>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTags: Story = {
	args: {
		tags: developerWordcloud,
	},
};

export const SingleTag: Story = {
	args: {
		tags: [developerWordcloud[0]],
	},
};

export const MultipleTagsSample: Story = {
	args: {
		tags: developerWordcloud.slice(0, 8),
	},
};
