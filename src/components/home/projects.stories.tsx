import type { Meta, StoryObj } from "@storybook/react";
import { projects } from "#/content/home/projects";
import { ProjectCard, ProjectsSection } from "./projects";

const meta = {
	title: "Components/Home/Projects",
	component: ProjectsSection,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ProjectsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleProject: Story = {
	render: () => <ProjectCard project={projects[0]} />,
};

export const AllProjects: Story = {
	args: {},
};
