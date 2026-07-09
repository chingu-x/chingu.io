import { createFileRoute } from '@tanstack/react-router'
import {ActionButton} from "#/components/shared/action-button.tsx";
import {MenuContent} from "#/components/layout/menu-content.tsx";
import {navItems} from "#/content/nav.ts";

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <MenuContent menuContent={navItems[0].menuContent}/>
        <ActionButton text="See how a voyage works" />
    </div>
  )
}
