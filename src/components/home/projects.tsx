import {AvatarFallback, AvatarGroup, AvatarImage} from "#/components/ui/avatar.tsx";
import { type Project, projects } from "#/content/home/projects.ts";
import { homeTypography as t } from "@/components/shared/styles/home/index.ts";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projectCardStyles = `
	pt-0
	hover:shadow-xl
	hover:-translate-y-1 transition-transform duration-200
`;

const projectScreenshotStyles = `
	h-[240px]
	bg-primary
`;

const badgeStyles = `
	mr-2 
	text-xs font-bold 
	text-neutral-focus 
	bg-neutral/10 p-3
`;

export const ProjectsSection = () => {
	return (
		<div className="projects">
			{projects.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</div>
	);
};

const bgClasses = [
	"bg-avatar-1",
	"bg-avatar-2",
	"bg-avatar-3",
];

// get random bg classes for avatars with no image
function getRandonAvatarBg(name: string) {
	const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return bgClasses[hash % bgClasses.length];
}

export const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<article>
			<Card className={projectCardStyles}>
				<CardHeader className={projectScreenshotStyles}>
					Screenshot Placeholder
				</CardHeader>
				<CardContent>
					<div className="p-meta">
						<Badge className={badgeStyles}>{`Voyage ${project.voyage}`}</Badge>
						<span className="text-xs font-bold text-neutral-content">
							{project.category}
						</span>
					</div>
					<h3 className={`${t.h3} my-4`}>{project.title}</h3>
					<p className="text-base text-neutral-focus">{project.tagline}</p>
					<p className="desc">{project.description}</p>
					<ul className="flex mt-4">
						{project.stack.map((tech) => (
							<Badge className={badgeStyles} key={tech}>
								{tech}
							</Badge>
						))}
					</ul>
					<Separator className="my-4 bg-neutral-focus/10" />
					<div>
						<span className="font-bold text-xs text-neutral-content">Team</span>
						<AvatarGroup className="mt-3 mb-6">
							{project.team.map((member) => (
								<Avatar key={member.name} size="sm" className="-mr-1">
									<AvatarImage
										src={`images/profile/${member.image}`}
										alt={member.name}
									/>
									<AvatarFallback
										className={`text-foreground ${getRandonAvatarBg(member.name)}`}>
										{member.name}
									</AvatarFallback>
								</Avatar>
							))}
						</AvatarGroup>
					</div>
					<div className="flex gap-4 text-sm font-bold">
						{project.links.map((link) => (
							<a
								key={link.label}
								href={link.url}
								className="group hover:text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label} <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">↗</span>
							</a>
						))}
					</div>
				</CardContent>
			</Card>
		</article>
	);
};
