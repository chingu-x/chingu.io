import { createFileRoute } from '@tanstack/react-router'
import {AnimatedChat} from "#/components/home/animated-chat.tsx";
import {HeadingBadge} from "#/components/home/heading-badge.tsx";
import {HomeRoleCards} from "#/components/home/role-cards.tsx";
import {pageContainerStyles} from "#/components/layout";
import {ActionButton} from "#/components/shared/action-button.tsx";
import {GhostButton} from "#/components/shared/ghost-button.tsx";
import {
    heroSectionStyles,
    homeStats,
    homeTestimonialStyles,
    homeTypography as t
} from "#/components/shared/styles/home";


export const Route = createFileRoute('/')({ component: Home })

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
              <div className={homeStats.grid}>
                  <div className={homeStats.cell}>
                      <div className={homeStats.num}><span>170</span>+</div>
                      <div className={homeStats.text}>countries</div>
                  </div>
                  <div className={homeStats.cell}>
                      <div className={homeStats.num}><span>94</span>%</div>
                      <div className={homeStats.text}>recommend Chingu</div>
                  </div>
                  <div className={homeStats.cell}>
                      <div className={homeStats.num}>$<span>0</span></div>
                      <div className={homeStats.text}>always free to join</div>
                  </div>
                  <div className={homeStats.cell}>
                      <div className={homeStats.num}><span>2016</span></div>
                      <div className={homeStats.text}>building since</div>
                  </div>
              </div>
          </section>
          <section id="team-roles" className="w-full flex flex-col gap-4 mt-8 mb-4">
              <HeadingBadge text="Grow Together" />
              <h2 className={t.h2}>
                  Build with a global, cross-functional team.
              </h2>
              <p className={t.pSectionLede}>
                  Voyagers are grouped by tier, so whether you’re applying what you’ve learned or you have years of experience, there’s a team that will support and grow with you.
              </p>
              <HomeRoleCards />
          </section>
          <section id="testimonials" className={homeTestimonialStyles}>
              <HeadingBadge text="Voices from the cohort" variant="dark" />
          </section>
      </div>
  )
}
