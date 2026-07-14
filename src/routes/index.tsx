import { createFileRoute } from '@tanstack/react-router'
import {AnimatedChat} from "#/components/home/animated-chat.tsx";
import {HeadingBadge} from "#/components/home/heading-badge.tsx";
import {pageContainerStyles} from "#/components/layout";
import {ActionButton} from "#/components/shared/action-button.tsx";
import {GhostButton} from "#/components/shared/ghost-button.tsx";
import {homeTypography, homeTypography as t} from "#/components/shared/styles/home/typography.ts";

export const Route = createFileRoute('/')({ component: Home })

const heroSectionStyles = `
  flex flex-col gap-10
  text-center
  py-10
  px-6
`

//<editor-fold desc="stats styles">
const statsGridStyles = `
    my-4
    
    bg-line
    self-stretch grid grid-cols-2
    gap-px
    border border-line
    rounded-md
    overflow-hidden    
`

const statsCellStyles = `
    bg-background
    p-4
    text-center
`

const statsNumStyles = `
  font-bold text-2xl  
  [&>span]:text-primary
`

const statsTextStyles = `
    text-2xs
    text-neutral
`
//</editor-fold>

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
              <p className="text-neutral text-2xs uppercase font-bold text-center">
                  Trusted By Voyagers Around the World
              </p>
              <div className={statsGridStyles}>
                  <div className={statsCellStyles}>
                      <div className={statsNumStyles}><span>170</span>+</div>
                      <div className={statsTextStyles}>countries</div>
                  </div>
                  <div className={statsCellStyles}>
                      <div className={statsNumStyles}><span>94</span>%</div>
                      <div className={statsTextStyles}>recommend Chingu</div>
                  </div>
                  <div className={statsCellStyles}>
                      <div className={statsNumStyles}>$<span>0</span></div>
                      <div className={statsTextStyles}>always free to join</div>
                  </div>
                  <div className={statsCellStyles}>
                      <div className={statsNumStyles}><span>2016</span></div>
                      <div className={statsTextStyles}>building since</div>
                  </div>
              </div>
          </section>
          <section id="team-roles" className="w-full flex flex-col gap-4 mt-8">
              <HeadingBadge text="Grow Together" />
              <h2 className={homeTypography.h2}>
                  Build with a global, cross-functional team.
              </h2>
              <p className={homeTypography.pIndented}>
                  Voyagers are grouped by tier, so whether you’re applying what you’ve learned or you have years of experience, there’s a team that will support and grow with you.
              </p>
              <HeadingBadge text="Grow Together" variant="dark" />
          </section>
      </div>
  )
}
