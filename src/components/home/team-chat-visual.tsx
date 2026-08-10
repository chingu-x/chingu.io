"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./team-chat-visual.css";

interface TeamChatVisualProps {
	className?: string;
	autoPlay?: boolean;
	assetBase?: string;
}

const BENEFIT_CARDS = [
	{
		id: "hcw-card-1",
		href: "#team-roles",
		ariaLabel: "Jump to cross-functional team roles",
		title: "Cross-functional teams",
		description:
			"Work with product, design, and dev peers from around the world.",
		icon: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9.2"/><ellipse cx="12" cy="12" rx="4" ry="9.2"/><path d="M2.8 12h18.4"/><path d="M4 7h16M4 17h16"/></svg>',
	},
	{
		id: "hcw-card-2",
		href: "#voyage-journey",
		ariaLabel: "Jump to the seven-week Voyage journey",
		title: "Collaborative Git workflows",
		description: "Submit pull requests and conduct code reviews together.",
		icon: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="5" r="2.3"/><circle cx="7" cy="19" r="2.3"/><circle cx="17.5" cy="9" r="2.3"/><path d="M7 7.3v9.4"/><path d="M17.5 11.3c0 3.4-3.6 4.3-7 4.9"/></svg>',
	},
	{
		id: "hcw-card-3",
		href: "#tools-of-the-trade",
		ariaLabel: "Jump to tools of the trade",
		title: "Agile team rituals",
		description: "Practice standups, sprint planning, reviews, and retros.",
		icon: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="3.2"/><rect x="6.6" y="6.6" width="3.4" height="10.4" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="6.6" width="3.4" height="6.4" rx="1" fill="currentColor" stroke="none"/></svg>',
	},
	{
		id: "hcw-card-4",
		href: "#real-products",
		ariaLabel: "Jump to real Voyage team products",
		title: "Deployed web apps",
		description: "Take your team from blank canvas to live URL.",
		icon: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 14c-1.5 1.2-2 4.5-2 4.5s3.3-.5 4.5-2"/><path d="M14.5 4.5C10 6 7 10 6.5 13l4.5 4.5c3-.5 7-3.5 8.5-8 .6-1.8.6-3.7.5-5-1.3-.1-3.2-.1-5.5.5z"/><circle cx="14" cy="9.5" r="2"/></svg>',
	},
];

const MESSAGES = [
	{
		name: "Chingu",
		avatar: "chingu",
		badge: null,
		text: "Welcome to your Chingu voyage. We're excited to see what you'll build together.",
		reactions: [
			["ship", 1],
			["+1", 3],
			["green", 1],
		],
		preview: null,
	},
	{
		name: "Sarah",
		avatar: "sarah",
		badge: ["PM", "var(--hcw-pm)"],
		text: "Sprint 1 starts now. Scheduling our first sync for tomorrow.",
		reactions: [
			["ready", 2],
			["+1", 4],
		],
		preview: "calendar",
	},
	{
		name: "Mike",
		avatar: "mike",
		badge: ["PO", "var(--hcw-po)"],
		text: "For the MVP, the Product Detail Page is our focus. The dashboard is a stretch goal.",
		reactions: [
			["scope", 2],
			["ok", 2],
		],
		preview: null,
	},
	{
		name: "Chloe",
		avatar: "chloe",
		badge: ["UX", "var(--hcw-ux)"],
		text: "Dropped the high-fidelity Figma mockup for the product page. Feedback welcome.",
		reactions: [
			["review", 2],
			["design", 2],
		],
		preview: "figma",
	},
	{
		name: "Ben",
		avatar: "ben",
		badge: ["DEV", "var(--hcw-dev)"],
		text: "Merging my work on the basic layout. PR is ready for review.",
		reactions: [
			["PR", 2],
			["+1", 2],
		],
		preview: null,
	},
	{
		name: "Maria",
		avatar: "maria",
		badge: ["DEV", "var(--hcw-dev)"],
		text: "Looks good. Merged to main.",
		reactions: [
			["merged", 2],
			["ship", 3],
		],
		preview: "branch",
	},
];

export function TeamChatVisual({
	className,
	autoPlay = true,
	assetBase = "./components/header-visual/assets/",
}: TeamChatVisualProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const feedRef = useRef<HTMLDivElement>(null);
	const scrollbarRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);
	const transportBtnRef = useRef<HTMLButtonElement>(null);
	const skipBtnRef = useRef<HTMLButtonElement>(null);

	const pausedRef = useRef(false);
	const runIdRef = useRef(0);
	const resumeWaitersRef = useRef<Array<() => void>>([]);
	const [paused, setPaused] = useState(false);
	const [ended, setEnded] = useState(false);

	const prefersReducedMotion =
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const speed = 2;

	const wait = useCallback(
		async (ms: number): Promise<void> => {
			let remaining = ms * speed;
			let last = performance.now();

			return new Promise((resolve) => {
				const tick = () => {
					if (pausedRef.current) {
						resumeWaitersRef.current.push(() => {
							last = performance.now();
							tick();
						});
						return;
					}
					const now = performance.now();
					remaining -= now - last;
					last = now;
					if (remaining <= 0) {
						resolve();
						return;
					}
					setTimeout(tick, Math.min(remaining, 50));
				};
				setTimeout(tick, Math.min(remaining, 50));
			});
		},
		[speed],
	);

	const calendarSvg = () =>
		'<div class="hcw-mini-card"><svg width="40" height="44" viewBox="0 0 40 44" fill="none"><rect x="2" y="6" width="36" height="34" rx="5" stroke="currentColor" stroke-width="2.5"/><path d="M2 16 H38" stroke="currentColor" stroke-width="2.5"/><path d="M12 2 V10 M28 2 V10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><text x="20" y="34" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="15" fill="currentColor">1</text></svg></div>';

	const branchSvg = () =>
		'<div class="hcw-mini-card"><svg width="34" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="4" r="2.4"/><circle cx="6" cy="20" r="2.4"/><circle cx="18" cy="9" r="2.4"/><path d="M6 6.4 V17.6"/><path d="M18 11.4 A8 8 0 0 1 10 19.5"/></svg></div>';

	const figmaCard = () =>
		'<div class="hcw-card-figma"><i class="hcw-fg-tab"></i><i class="hcw-fg-nav" style="left:40px"></i><i class="hcw-fg-nav" style="left:53px"></i><i class="hcw-fg-nav" style="left:66px"></i><i class="hcw-fg-title"></i><i class="hcw-fg-div" style="top:23px"></i><i class="hcw-fg-div" style="top:26px"></i><i class="hcw-fg-div" style="top:58px"></i><i class="hcw-fg-circ" style="left:9px"></i><i class="hcw-fg-circ" style="left:33px"></i><i class="hcw-fg-circ" style="left:57px"></i></div>';

	const previewHtml = (kind: string) => {
		if (kind === "calendar") return calendarSvg();
		if (kind === "branch") return branchSvg();
		if (kind === "figma") return figmaCard();
		return "";
	};

	const avatarHtml = (key: string) => {
		const avatars: Record<string, { cls: string; src: string }> = {
			chingu: { cls: "hcw-avatar chingu", src: "chingu-badge.png" },
			sarah: { cls: "hcw-avatar", src: "sarah-96.png" },
			mike: { cls: "hcw-avatar", src: "mike-96.png" },
			chloe: { cls: "hcw-avatar", src: "chloe-96.png" },
			ben: { cls: "hcw-avatar", src: "ben-96.png" },
			maria: { cls: "hcw-avatar", src: "maria-96.png" },
		};
		const avatar = avatars[key];
		return `<div class="${avatar.cls}"><img src="${assetBase}${avatar.src}" alt=""></div>`;
	};

	const renderReaction = (reaction: [string, number]) => {
		const [key, count] = reaction;
		return `<span class="hcw-reaction"><span class="emo">${key}</span><span class="cnt">${count}</span></span>`;
	};

	const renderMessage = (message: (typeof MESSAGES)[0], index: number) => {
		const wrap = document.createElement("div");
		wrap.className = `hcw-msg${index % 2 ? " alt" : ""}`;
		const badge = message.badge
			? `<span class="hcw-rolebadge" style="background:${message.badge[1]}">${message.badge[0]}</span>`
			: "";
		const reactions = message.reactions.map(renderReaction).join("");
		const preview = message.preview
			? `<div class="hcw-preview rise">${previewHtml(message.preview)}</div>`
			: "";
		wrap.innerHTML = `<div class="hcw-msg-inner"><div class="hcw-msg-pad"><div class="rise">${avatarHtml(message.avatar)}</div><div class="hcw-body"><div class="hcw-namerow rise"><span class="hcw-name">${message.name}</span>${badge}</div><div class="hcw-text rise">${message.text}</div><div class="hcw-reactions">${reactions}</div></div>${preview}</div></div>`;
		return wrap;
	};

	const renderTyping = (message: (typeof MESSAGES)[0]) => {
		const wrap = document.createElement("div");
		wrap.className = "hcw-msg hcw-typing";
		wrap.innerHTML = `<div class="hcw-msg-inner"><div class="hcw-msg-pad"><div class="rise">${avatarHtml(message.avatar)}</div><div class="hcw-body"><div class="hcw-bubble rise"><span class="hcw-dot"></span><span class="hcw-dot"></span><span class="hcw-dot"></span></div></div></div></div>`;
		return wrap;
	};

	const setCardsInteractive = (active: boolean) => {
		if (!cardsRef.current) return;
		if (active) {
			cardsRef.current.removeAttribute("inert");
			cardsRef.current.setAttribute("aria-hidden", "false");
		} else {
			cardsRef.current.setAttribute("inert", "");
			cardsRef.current.setAttribute("aria-hidden", "true");
		}
	};

	const renderTransport = useCallback(() => {
		if (!transportBtnRef.current) return;
		const isEnded = ended;
		const isPaused = pausedRef.current;
		const state = isEnded ? "replay" : isPaused ? "play" : "pause";

		const iconPause =
			'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1.2"/><rect x="14" y="5" width="4" height="14" rx="1.2"/></svg>';
		const iconPlay =
			'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5z"/></svg>';
		const iconReplay =
			'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>';

		transportBtnRef.current.innerHTML =
			state === "replay" ? iconReplay : state === "play" ? iconPlay : iconPause;
		transportBtnRef.current.setAttribute(
			"aria-label",
			state === "replay"
				? "Play again"
				: state === "play"
					? "Play animation"
					: "Pause animation",
		);
		transportBtnRef.current.setAttribute(
			"aria-pressed",
			String(pausedRef.current && !ended),
		);
	}, [ended]);

	const showEnd = useCallback(() => {
		if (!rootRef.current) return;
		setEnded(true);
		rootRef.current.classList.add("ended");
		setCardsInteractive(true);
	}, []);

	const clearEnd = useCallback(() => {
		if (!rootRef.current) return;
		setEnded(false);
		rootRef.current.classList.remove("ended");
		setCardsInteractive(false);
	}, []);

	const playingRef = useRef(false);

	const play = useCallback(async () => {
		const myRun = runIdRef.current;

		// Prevent running twice simultaneously
		if (playingRef.current && runIdRef.current === myRun) {
			return;
		}

		playingRef.current = true;
		pausedRef.current = false;
		setPaused(false);
		setEnded(false);
		resumeWaitersRef.current = [];

		if (!feedRef.current || !scrollbarRef.current) {
			return;
		}

		feedRef.current.innerHTML = '<div class="hcw-channel">#chingu-voyage</div>';
		scrollbarRef.current.classList.remove("show");

		if (prefersReducedMotion) {
			MESSAGES.forEach((message, index) => {
				const el = renderMessage(message, index);
				feedRef.current!.appendChild(el);
				el.classList.add("shown");
				el.querySelectorAll(".hcw-reaction").forEach((chip) =>
					chip.classList.add("pop"),
				);
				const preview = el.querySelector(".hcw-preview");
				if (preview) preview.classList.add("show");
			});
			playingRef.current = false;
			showEnd();
			return;
		}

		await wait(520);

		for (let index = 0; index < MESSAGES.length; index++) {
			if (myRun !== runIdRef.current) {
				playingRef.current = false;
				return;
			}

			const message = MESSAGES[index];
			const typing = renderTyping(message);
			feedRef.current.appendChild(typing);
			await new Promise((resolve) => setTimeout(resolve, 32));
			typing.classList.add("shown");
			console.log(
				`[TeamChat] Typing shown for message ${index}: ${message.name}`,
			);

			// Scroll to show typing indicator
			await new Promise((resolve) => setTimeout(resolve, 16));
			if (feedRef.current?.parentElement && feedRef.current) {
				const viewport = feedRef.current.parentElement;
				viewport.scrollTop = Math.max(
					0,
					feedRef.current.scrollHeight - viewport.clientHeight,
				);
			}

			await wait(index === 0 ? 620 : 780);

			if (myRun !== runIdRef.current) return;

			const messageEl = renderMessage(message, index);
			feedRef.current.appendChild(messageEl);
			await new Promise((resolve) => setTimeout(resolve, 32));
			messageEl.classList.add("shown");
			typing.classList.remove("shown");
			await wait(150);
			typing.remove();

			// Scroll to bottom to show new messages
			if (feedRef.current?.parentElement) {
				feedRef.current.parentElement.scrollTop =
					feedRef.current.parentElement.scrollHeight;
			}

			if (index === 2 && scrollbarRef.current)
				scrollbarRef.current.classList.add("show");

			await wait(300);

			// Reveal reactions
			const chips = messageEl.querySelectorAll(".hcw-reaction");
			for (const chip of chips) {
				chip.classList.add("pop");
				await wait(95);
			}

			// Reveal preview
			const preview = messageEl.querySelector(".hcw-preview");
			if (preview) preview.classList.add("show");

			await wait(index === MESSAGES.length - 1 ? 0 : 760);
		}

		await wait(700);
		playingRef.current = false;
		if (myRun === runIdRef.current) {
			showEnd();
		}
	}, [wait, prefersReducedMotion, renderMessage, renderTyping, showEnd]);

	const skip = useCallback(() => {
		runIdRef.current += 1;
		pausedRef.current = false;
		setPaused(false);

		if (!feedRef.current || !scrollbarRef.current) return;

		feedRef.current.innerHTML = '<div class="hcw-channel">#chingu-voyage</div>';
		MESSAGES.forEach((message, index) => {
			const el = renderMessage(message, index);
			feedRef.current!.appendChild(el);
			el.classList.add("shown");
			el.querySelectorAll(".hcw-reaction").forEach((chip) =>
				chip.classList.add("pop"),
			);
			const preview = el.querySelector(".hcw-preview");
			if (preview) preview.classList.add("show");
		});

		scrollbarRef.current.classList.add("show");

		// Scroll to bottom to show all messages
		if (feedRef.current?.parentElement) {
			feedRef.current.parentElement.scrollTop =
				feedRef.current.parentElement.scrollHeight;
		}

		showEnd();
	}, [renderMessage, showEnd]);

	const togglePause = useCallback(() => {
		if (ended) {
			clearEnd();
			play();
		} else {
			pausedRef.current = !pausedRef.current;
			setPaused((p) => !p);
			if (!pausedRef.current) {
				resumeWaitersRef.current.splice(0).forEach((fn) => fn());
			}
		}
	}, [ended, play, clearEnd]);

	// Setup event listeners
	useEffect(() => {
		if (!transportBtnRef.current || !skipBtnRef.current) return;

		const handleTransport = () => togglePause();
		const handleSkip = () => !ended && skip();

		transportBtnRef.current.addEventListener("click", handleTransport);
		skipBtnRef.current.addEventListener("click", handleSkip);

		return () => {
			transportBtnRef.current?.removeEventListener("click", handleTransport);
			skipBtnRef.current?.removeEventListener("click", handleSkip);
		};
	}, [ended, paused]);

	// Auto-play on intersection
	useEffect(() => {
		if (!autoPlay || !rootRef.current) return;

		if ("IntersectionObserver" in window) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							observer.disconnect();
							runIdRef.current += 1;
							play();
						}
					});
				},
				{ threshold: 0.25 },
			);
			observer.observe(rootRef.current);
			return () => observer.disconnect();
		} else {
			runIdRef.current += 1;
			play();
		}
	}, [autoPlay, prefersReducedMotion]);

	useEffect(() => {
		renderTransport();
	}, [paused, ended]);

	return (
		<div
			ref={rootRef}
			className={cn("hcw", className)}
			data-hcw-root
			data-asset-base={assetBase}
			role="group"
			aria-label="A Chingu team chat with live messages and reactions as a team plans and ships an MVP."
		>
			<div className="hcw-window">
				<div className="hcw-titlebar">
					<span className="hcw-light r"></span>
					<span className="hcw-light y"></span>
					<span className="hcw-light g"></span>
				</div>
				<div className="hcw-main">
					<div className="hcw-sidebar">
						<div className="hcw-logo">
							<img src={`${assetBase}chingu-badge.png`} alt="Chingu" />
						</div>
						<div className="hcw-me">U</div>
					</div>
					<div className="hcw-viewport">
						<div ref={feedRef} className="hcw-feed" data-hcw="feed">
							<div className="hcw-channel">#chingu-voyage</div>
						</div>
						<div
							ref={scrollbarRef}
							className="hcw-scrollbar"
							data-hcw="scrollbar"
						>
							<div className="hcw-thumb"></div>
						</div>
					</div>
				</div>
				<div className="hcw-scrim" data-hcw="scrim"></div>
			</div>

			<div
				ref={cardsRef}
				className="hcw-cards"
				data-hcw="cards"
				aria-hidden="true"
				inert
			>
				{BENEFIT_CARDS.map((card) => (
					<a
						key={card.id}
						className={`hcw-card ${card.id}`}
						href={card.href}
						aria-label={card.ariaLabel}
						tabIndex={-1}
					>
						<span
							className="hcw-card-ico"
							dangerouslySetInnerHTML={{ __html: card.icon }}
						/>
						<span className="hcw-card-tx">
							<b>{card.title}</b>
							<span>{card.description}</span>
						</span>
					</a>
				))}
			</div>

			<button
				ref={transportBtnRef}
				className="hcw-transport"
				type="button"
				data-hcw="transport"
				aria-label="Pause animation"
				aria-pressed="false"
			/>
			<button
				ref={skipBtnRef}
				className="hcw-skip"
				type="button"
				data-hcw="skip"
				aria-label="Skip to the end"
			>
				Skip
				<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
					<path d="M5 5.5v13a1 1 0 0 0 1.55.83L15 13.7V18a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0v4.3L6.55 4.67A1 1 0 0 0 5 5.5z" />
				</svg>
			</button>
		</div>
	);
}
