import { createFileRoute } from '@tanstack/react-router'
import {homeTypography as t} from "#/components/shared/styles/home/typography.ts";
import {GhostButton} from "#/components/shared/ghost-button.tsx";
import {ActionButton} from "#/components/shared/action-button.tsx";
import {pageContainerStyles} from "#/components/layout";

export const Route = createFileRoute('/')({ component: Home })

const heroSectionStyles = `
  flex flex-col gap-10
  text-center
  py-10
  px-6
`

function Home() {
  return (
      <div className={pageContainerStyles}>
        <section id="hero" className={heroSectionStyles}>
            <div className={t.h1}>
                {`Build real products`} <br/>
                {`with a `}
                <span className={t.gradient}>remote team</span>.
            </div>
            <p className="text-neutral-focus">
                Seven-week sprints for designers, developers, and agile leaders.
                Industry-standard tools and processes.
                Real teams, real products, no paywall.
            </p>
            <div className="flex gap-4 justify-center">
                <ActionButton text="See how a voyage works" />
                <GhostButton text="Join the community"/>
            </div>
            <div>
                {/*TODO: Placeholder for the chat image*/}
            </div>
        </section>
      </div>
  )
}
