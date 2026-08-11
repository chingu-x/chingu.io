import { Link } from "@tanstack/react-router";
import { NavH1 } from "#/components/shared/styles/nav/h1.tsx";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "#/components/ui/avatar.tsx";
import { Card } from "#/components/ui/card.tsx";
import { Separator } from "#/components/ui/separator.tsx";
import type { MenuContent as MenuContentType } from "#/types/nav.ts";

export function MenuContent({ menuContent }: { menuContent: MenuContentType }) {
	return (
		<Card className="grid grid-cols-[1.08fr_0.92fr] max-w-[calc(var(--max-content-width)*0.8)] p-5 ring-0">
			<div>
				<NavH1 text={menuContent.title} />
				{menuContent.subMenu.map((subMenu) => (
					<Link key={subMenu.title} to={subMenu.href}>
						<div className="p-4 rounded-lg cursor-pointer hover:bg-primary/10">
							<h2 className="font-bold text-base mb-1">{subMenu.title}</h2>
							<p>{subMenu.text}</p>
						</div>
					</Link>
				))}
			</div>
			<Card className="p-4 bg-primary/5 ring-primary/30">
				<NavH1 text={menuContent.card.title} />
				<p className="text-base text-neutral-focus">{`"${menuContent.card.text}"`}</p>
				<Separator className="my-4" />
				<div className="flex items-center gap-2">
					<Avatar size="lg">
						<AvatarImage alt={menuContent.card.initials} />
						<AvatarFallback className="bg-primary text-foreground font-bold text-xs">
							{menuContent.card.initials}
						</AvatarFallback>
					</Avatar>
					<div>
						<span className="font-extrabold mr-2">{menuContent.card.name}</span>
						<span className="uppercase text-foreground/60 font-bold text-2xs">
							{menuContent.card.role}
						</span>
					</div>
				</div>
			</Card>
		</Card>
	);
}
