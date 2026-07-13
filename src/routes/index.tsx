import { createFileRoute } from '@tanstack/react-router'
import {homeTypography as t} from "#/components/shared/styles/home/typography.ts";
import {GhostButton} from "#/components/shared/ghost-button.tsx";
import {ActionButton} from "#/components/shared/action-button.tsx";

export const Route = createFileRoute('/')({ component: Home })

const heroSectionStyles = `
  flex flex-col gap-10
  text-center
  py-20
`

function Home() {
  return (
    <section id="hero" className={heroSectionStyles}>
      <div className={t.h1()}>Build real products with a remote team.</div>
        <ActionButton text="See how a voyage works" />
        <GhostButton text="Join the community"/>
    </section>
  )
}
