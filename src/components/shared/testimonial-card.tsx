import type { TestimonialCard as TestimonialCardType } from "#/content/roles/developer-testimonial.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function TestimonialCard({testimonial}: { testimonial: TestimonialCardType }) {
	return (
		<Card className="p-6 shadow-md bg-linear-to-b from-white to-foreground-100 max-w-205">
			<blockquote className="text-xl">"{testimonial.quote}"</blockquote>
			<Separator />
			<div className="flex items-center gap-4">
				<Avatar aria-hidden="true" size="lg">
					<AvatarImage alt={testimonial.name}/>
					<AvatarFallback
						className="bg-primary text-foreground font-bold text-xs"
					>
						{testimonial.avatarFallback}
					</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<strong
						className="text-sm font-bold"
					>{testimonial.name}</strong>
					<span
						className="uppercase text-2xs text-neutral font-bold"
					>
						{testimonial.role}
					</span>
				</div>
			</div>
		</Card>
	);
}
