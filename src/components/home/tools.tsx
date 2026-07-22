import { type Tool, tools } from "#/content/home/tools.ts";
import { Card } from "@/components/ui/card";

const toolCardStyles = `
	basis-[calc(33.333%-1rem)] 	
	min-w-23.5 
	flex 
	flex-col 
	items-center
	
	md:basis-[calc(20%-1rem)]
	lg:basis-[calc(16.666%-1rem)]
	xl:basis-[calc(12.5%-1rem)]
`;

const imageBoxStyles = `
	w-16 h-16 
	border 
	rounded-lg 
	shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_8px_18px_rgba(76,81,91,0.1)]
`;

export const ToolsCloudSection = () => {
	return (
		<ul
			className="flex gap-4 flex-wrap justify-center"
			aria-label="Software, web development, and team delivery tools"
		>
			{tools.map((tool) => (
				<ToolToken key={tool.name} tool={tool} />
			))}
		</ul>
	);
};

export const ToolToken = ({ tool }: { tool: Tool }) => {
	return (
		<Card className={toolCardStyles}>
			<span className={imageBoxStyles}>
				<img
					src={`./images/tools/${tool.image}`}
					alt={tool.name}
					width={256}
					height={256}
					loading="lazy"
				/>
			</span>
			<span className="font-extrabold">{tool.name}</span>
		</Card>
	);
};
