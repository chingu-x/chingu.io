import {
	Bubble,
	BubbleContent,
	BubbleGroup,
	BubbleReactions,
} from "#/components/ui/bubble.tsx";
import { Marker, MarkerContent } from "#/components/ui/marker.tsx";
import {
	Message,
	MessageAvatar,
	MessageContent,
} from "#/components/ui/message.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AnimatedChatStyles = `
    flex w-full max-w-sm flex-col gap-6 py-6 px-12
    h-[350px] w-[480px]
    mx-auto
    border-1
    bg-neutral/30
    rounded-md
`;

export function AnimatedChat() {
	return (
		<div className={AnimatedChatStyles}>
			<div>Animated Chat Placeholder</div>
			<Message align="end">
				<MessageAvatar>
					<Avatar>
						<AvatarImage src="/avatars/10.png" alt="@me" />
						<AvatarFallback>ME</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<Bubble>
						<BubbleContent>Deploying to prod real quick.</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
			<Message>
				<MessageAvatar>
					<Avatar>
						<AvatarImage src="/avatars/02.png" alt="@rabbit" />
						<AvatarFallback>R</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<BubbleGroup>
						<Bubble variant="muted">
							<BubbleContent>
								It&apos;s always a one-line change 😭.
							</BubbleContent>
						</Bubble>
						<Bubble variant="muted">
							<BubbleContent>Alright, let me take a look.</BubbleContent>
							<BubbleReactions aria-label="Reactions: thumbs up">
								<span>👍</span>
							</BubbleReactions>
						</Bubble>
					</BubbleGroup>
				</MessageContent>
			</Message>
			<Marker role="status">
				<MarkerContent className="shimmer">
					<span className="font-medium">Oliver</span> is typing...
				</MarkerContent>
			</Marker>
		</div>
	);
}
