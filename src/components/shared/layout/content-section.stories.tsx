import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { developerTypes } from "#/content/developer-types.ts";
import { Cards } from "#/components/shared/cards.tsx";
import { RolesContentSection } from "./content-section";

const meta = {
	title: "Components/Roles/ContentSection",
	component: RolesContentSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof RolesContentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "developer-types",
		variant: "default",
		headerBadgeText: "Who this is for",
		headingText: "If you can build something solo, you're ready for a team.",
		children: <Cards items={developerTypes} />,
	},
};

export const Dark: Story = {
	args: {
		id: "dark-section",
		variant: "dark",
		headerBadgeText: "Who this is for",
		headingText: "If you can build something solo, you're ready for a team.",
		children: <Cards items={developerTypes} />,
	},
};

export const WithCustomContent: Story = {
	args: {
		id: "custom-section",
		variant: "default",
		headerBadgeText: "Requirements",
		headingText: "What You Need to Know",
		children: (
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 className="font-semibold mb-2">Technical Skills</h3>
					<p>Comfortable with basic programming concepts and syntax</p>
				</div>
				<div>
					<h3 className="font-semibold mb-2">Communication</h3>
					<p>Ability to work with a team and participate in discussions</p>
				</div>
			</div>
		),
	},
};
