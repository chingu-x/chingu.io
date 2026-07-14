import { createFileRoute } from '@tanstack/react-router'
import {homeTypography as t} from "#/components/shared/styles/home/typography.ts";
import {GhostButton} from "#/components/shared/ghost-button.tsx";
import {ActionButton} from "#/components/shared/action-button.tsx";
import {pageContainerStyles} from "#/components/layout";
import {AnimatedChat} from "#/components/home/animated-chat.tsx";

export const Route = createFileRoute('/')({ component: Home })

const heroSectionStyles = `
  flex flex-col gap-10
  text-center
  py-10
  px-6
`

const statGridStyles = `
    grid grid-cols-2
    
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
            <p className={t.p}>
                Seven-week sprints for designers, developers, and agile leaders.
                Industry-standard tools and processes.
                Real teams, real products, no paywall.
            </p>
            <div className="flex gap-4 justify-center">
                <ActionButton text="See how a voyage works" />
                <GhostButton text="Join the community"/>
            </div>
            <AnimatedChat />
        </section>
          <section id="stats">
              <p className="text-neutral text-2xs uppercase font-bold">
                  Trusted By Voyagers Around the World
              </p>
              <div className={statGridStyles}>
                  <div className="stats-cell">
                      <div className="stats-num"><span>170</span>+</div>
                      <div className="stats-text">countries</div>
                  </div>
                  <div className="stats-cell">
                      <div className="proof-num"><span>94</span>%</div>
                      <div className="stats-text">recommend Chingu</div>
                  </div>
                  <div className="stats-cell">
                      <div className="proof-num">$<span>0</span></div>
                      <div className="stats-text">always free to join</div>
                  </div>
                  <div className="stats-cell">
                      <div className="proof-num"><span>2016</span></div>
                      <div className="stats-text">building since</div>
                  </div>
              </div>
          </section>
      </div>
  )
}
