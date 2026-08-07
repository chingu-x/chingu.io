import type { QnAItem } from "#/types/content/qna.ts";

export function QnA({ items }: { items: QnAItem[] }) {
	return (
		<dl className="my-10">
			{items.map((item) => (
				<div
					key={item.question}
					className="mt-4 pt-4 border-t border-line first:mt-0 first:pt-0 first:border-t-0"
				>
					<dt className="font-[750] text-base mb-2">{item.question}</dt>
					<dd className="mt-2 text-neutral-focus">{item.answer}</dd>
				</div>
			))}
		</dl>
	);
}
