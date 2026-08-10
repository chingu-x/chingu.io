"use client";

import { useEffect, useRef } from "react";
import { cn } from "#/lib/utils.ts";
import "./team-chat-animation.css";

interface TeamChatAnimationProps {
	className?: string;
	assetBase?: string;
}

export function TeamChatAnimation({
	className,
	assetBase = "./components/header-visual/assets/",
}: TeamChatAnimationProps) {
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;

		const feed = root.querySelector("[data-hcw='feed']");
		const scrollbar = root.querySelector("[data-hcw='scrollbar']");
		const cards = root.querySelector("[data-hcw='cards']");
		const transportBtn = root.querySelector("[data-hcw='transport']");
		const skipBtn = root.querySelector("[data-hcw='skip']");

		if (!feed || !scrollbar) return;

		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const speed = 2;

		const iconPause =
			'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1.2"/><rect x="14" y="5" width="4" height="14" rx="1.2"/></svg>';
		const iconPlay =
			'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5z"/></svg>';
		const iconReplay =
			'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/></svg>';

		const avatars: Record<string, { cls: string; src: string }> = {
			chingu: { cls: "hcw-avatar chingu", src: "chingu-badge.png" },
			sarah: { cls: "hcw-avatar", src: "sarah-96.png" },
			mike: { cls: "hcw-avatar", src: "mike-96.png" },
			chloe: { cls: "hcw-avatar", src: "chloe-96.png" },
			ben: { cls: "hcw-avatar", src: "ben-96.png" },
			maria: { cls: "hcw-avatar", src: "maria-96.png" },
		};

		const messages = [
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

		let paused = false;
		let ended = false;
		let runId = 0;
		const resumeWaiters: (() => void)[] = [];

		function wait(ms: number): Promise<void> {
			let remaining = ms * speed;
			let last = performance.now();
			return new Promise((resolve) => {
				function tick() {
					if (paused) {
						resumeWaiters.push(() => {
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
				}
				setTimeout(tick, Math.min(remaining, 50));
			});
		}

		function avatarHtml(key: string) {
			const avatar = avatars[key];
			return `<div class="${avatar.cls}"><img src="${assetBase}${avatar.src}" alt=""></div>`;
		}

		function renderReaction([key, count]: [string, number]) {
			return `<span class="hcw-reaction"><span class="emo">${key}</span><span class="cnt">${count}</span></span>`;
		}

		function renderMessage(
			message: (typeof messages)[0],
			index: number,
		): HTMLElement {
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
		}

		function renderTyping(message: (typeof messages)[0]): HTMLElement {
			const wrap = document.createElement("div");
			wrap.className = "hcw-msg hcw-typing";
			wrap.innerHTML = `<div class="hcw-msg-inner"><div class="hcw-msg-pad"><div class="rise">${avatarHtml(message.avatar)}</div><div class="hcw-body"><div class="hcw-bubble rise"><span class="hcw-dot"></span><span class="hcw-dot"></span><span class="hcw-dot"></span></div></div></div></div>`;
			return wrap;
		}

		function previewHtml(kind: string): string {
			if (kind === "calendar")
				return '<div class="hcw-mini-card"><svg width="40" height="44" viewBox="0 0 40 44" fill="none"><rect x="2" y="6" width="36" height="34" rx="5" stroke="currentColor" stroke-width="2.5"/><path d="M2 16 H38" stroke="currentColor" stroke-width="2.5"/><path d="M12 2 V10 M28 2 V10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><text x="20" y="34" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="15" fill="currentColor">1</text></svg></div>';
			if (kind === "branch")
				return '<div class="hcw-mini-card"><svg width="34" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="4" r="2.4"/><circle cx="6" cy="20" r="2.4"/><circle cx="18" cy="9" r="2.4"/><path d="M6 6.4 V17.6"/><path d="M18 11.4 A8 8 0 0 1 10 19.5"/></svg></div>';
			if (kind === "figma")
				return '<div class="hcw-card-figma"><i class="hcw-fg-tab"></i><i class="hcw-fg-nav" style="left:40px"></i><i class="hcw-fg-nav" style="left:53px"></i><i class="hcw-fg-nav" style="left:66px"></i><i class="hcw-fg-title"></i><i class="hcw-fg-div" style="top:23px"></i><i class="hcw-fg-div" style="top:26px"></i><i class="hcw-fg-div" style="top:58px"></i><i class="hcw-fg-circ" style="left:9px"></i><i class="hcw-fg-circ" style="left:33px"></i><i class="hcw-fg-circ" style="left:57px"></i></div>';
			return "";
		}

		function renderTransport() {
			if (!transportBtn) return;
			const state = ended ? "replay" : paused ? "play" : "pause";
			transportBtn.innerHTML =
				state === "replay"
					? iconReplay
					: state === "play"
						? iconPlay
						: iconPause;
			transportBtn.setAttribute(
				"aria-label",
				state === "replay"
					? "Play again"
					: state === "play"
						? "Play animation"
						: "Pause animation",
			);
			transportBtn.setAttribute("aria-pressed", String(paused && !ended));
		}

		function setCardsInteractive(active: boolean) {
			if (!cards) return;
			cards.toggleAttribute("inert", !active);
			cards.setAttribute("aria-hidden", String(!active));
			cards.querySelectorAll("a").forEach((link) => {
				link.tabIndex = active ? 0 : -1;
			});
		}

		function renderFinalChat() {
			feed.querySelectorAll(".hcw-msg").forEach((node) => node.remove());
			messages.forEach((message, index) => {
				const el = renderMessage(message, index);
				feed.appendChild(el);
				el.classList.add("shown");
				el.querySelectorAll(".hcw-reaction").forEach((chip) =>
					chip.classList.add("pop"),
				);
				const preview = el.querySelector(".hcw-preview");
				if (preview) preview.classList.add("show");
			});
			scrollbar.classList.add("show");
		}

		function showEnd() {
			ended = true;
			root.classList.add("ended");
			setCardsInteractive(true);
			renderTransport();
		}

		function clearEnd() {
			ended = false;
			root.classList.remove("ended");
			setCardsInteractive(false);
		}

		async function reveal(messageEl: Element) {
			const chips = messageEl.querySelectorAll(".hcw-reaction");
			for (const chip of chips) {
				chip.classList.add("pop");
				await wait(95);
			}
			const preview = messageEl.querySelector(".hcw-preview");
			if (preview) preview.classList.add("show");
		}

		async function play() {
			const myRun = ++runId;
			paused = false;
			ended = false;
			root.classList.remove("is-paused", "ended");
			setCardsInteractive(false);
			renderTransport();
			resumeWaiters.length = 0;
			feed.querySelectorAll(".hcw-msg").forEach((node) => node.remove());
			scrollbar.classList.remove("show");

			if (reduce) {
				renderFinalChat();
				showEnd();
				return;
			}

			await wait(520);
			for (let index = 0; index < messages.length; index++) {
				if (myRun !== runId) return;
				const message = messages[index];
				const typing = renderTyping(message);
				feed.appendChild(typing);
				await new Promise((resolve) => setTimeout(resolve, 32));
				typing.classList.add("shown");
				await wait(index === 0 ? 620 : 780);
				if (myRun !== runId) return;

				const messageEl = renderMessage(message, index);
				feed.appendChild(messageEl);
				await new Promise((resolve) => setTimeout(resolve, 32));
				messageEl.classList.add("shown");
				typing.classList.remove("shown");
				await wait(150);
				typing.remove();
				if (index === 2) scrollbar.classList.add("show");
				await wait(300);
				await reveal(messageEl);
				await wait(index === messages.length - 1 ? 0 : 760);
			}

			await wait(700);
			if (myRun === runId) showEnd();
		}

		function skip() {
			runId++;
			paused = false;
			renderFinalChat();
			showEnd();
		}

		if (transportBtn) {
			transportBtn.addEventListener("click", () => {
				if (ended) {
					clearEnd();
					play();
				} else {
					paused = !paused;
					root.classList.toggle("is-paused", paused);
					renderTransport();
					if (!paused) resumeWaiters.splice(0).forEach((fn) => fn());
				}
			});
		}

		if (skipBtn) skipBtn.addEventListener("click", () => !ended && skip());

		setCardsInteractive(false);
		renderTransport();

		if ("IntersectionObserver" in window) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							observer.disconnect();
							play();
						}
					});
				},
				{ threshold: 0.25 },
			);
			observer.observe(root);
		} else {
			play();
		}
	}, [assetBase]);

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
						<div className="hcw-feed" data-hcw="feed">
							<div className="hcw-channel">#chingu-voyage</div>
						</div>
						<div className="hcw-scrollbar" data-hcw="scrollbar">
							<div className="hcw-thumb"></div>
						</div>
					</div>
				</div>
				<div className="hcw-scrim" data-hcw="scrim"></div>
			</div>

			<div className="hcw-cards" data-hcw="cards" aria-hidden="true" inert>
				<a
					className="hcw-card hcw-card-1"
					href="#team-roles"
					aria-label="Jump to cross-functional team roles"
					tabIndex={-1}
				>
					<span className="hcw-card-ico">
						<svg
							width="30"
							height="30"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.7"
						>
							<circle cx="12" cy="12" r="9.2" />
							<ellipse cx="12" cy="12" rx="4" ry="9.2" />
							<path d="M2.8 12h18.4" />
							<path d="M4 7h16M4 17h16" />
						</svg>
					</span>
					<span className="hcw-card-tx">
						<b>Cross-functional teams</b>
						<span>
							Work with product, design, and dev peers from around the world.
						</span>
					</span>
				</a>
				<a
					className="hcw-card hcw-card-2"
					href="#voyage-journey"
					aria-label="Jump to the seven-week Voyage journey"
					tabIndex={-1}
				>
					<span className="hcw-card-ico">
						<svg
							width="30"
							height="30"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="7" cy="5" r="2.3" />
							<circle cx="7" cy="19" r="2.3" />
							<circle cx="17.5" cy="9" r="2.3" />
							<path d="M7 7.3v9.4" />
							<path d="M17.5 11.3c0 3.4-3.6 4.3-7 4.9" />
						</svg>
					</span>
					<span className="hcw-card-tx">
						<b>Collaborative Git workflows</b>
						<span>Submit pull requests and conduct code reviews together.</span>
					</span>
				</a>
				<a
					className="hcw-card hcw-card-3"
					href="#tools-of-the-trade"
					aria-label="Jump to tools of the trade"
					tabIndex={-1}
				>
					<span className="hcw-card-ico">
						<svg
							width="30"
							height="30"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.7"
						>
							<rect x="3.5" y="3.5" width="17" height="17" rx="3.2" />
							<rect
								x="6.6"
								y="6.6"
								width="3.4"
								height="10.4"
								rx="1"
								fill="currentColor"
								stroke="none"
							/>
							<rect
								x="14"
								y="6.6"
								width="3.4"
								height="6.4"
								rx="1"
								fill="currentColor"
								stroke="none"
							/>
						</svg>
					</span>
					<span className="hcw-card-tx">
						<b>Agile team rituals</b>
						<span>
							Practice standups, sprint planning, reviews, and retros.
						</span>
					</span>
				</a>
				<a
					className="hcw-card hcw-card-4"
					href="#real-products"
					aria-label="Jump to real Voyage team products"
					tabIndex={-1}
				>
					<span className="hcw-card-ico">
						<svg
							width="30"
							height="30"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.7"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 14c-1.5 1.2-2 4.5-2 4.5s3.3-.5 4.5-2" />
							<path d="M14.5 4.5C10 6 7 10 6.5 13l4.5 4.5c3-.5 7-3.5 8.5-8 .6-1.8.6-3.7.5-5-1.3-.1-3.2-.1-5.5.5z" />
							<circle cx="14" cy="9.5" r="2" />
						</svg>
					</span>
					<span className="hcw-card-tx">
						<b>Deployed web apps</b>
						<span>Take your team from blank canvas to live URL.</span>
					</span>
				</a>
			</div>

			<button
				className="hcw-transport"
				type="button"
				data-hcw="transport"
				aria-label="Pause animation"
				aria-pressed="false"
			/>
			<button
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
