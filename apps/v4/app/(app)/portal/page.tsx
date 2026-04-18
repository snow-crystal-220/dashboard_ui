import Image from "next/image"

import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { AppSidebar } from "@/app/(app)/portal/components/app-sidebar"
import { ChartAreaInteractive } from "@/app/(app)/portal/components/chart-area-interactive"
import { DataTable } from "@/app/(app)/portal/components/data-table"
import { SectionCards } from "@/app/(app)/portal/components/section-cards"
import { SiteHeader } from "@/app/(app)/portal/components/site-header"
import { ProjectOverview } from "@/app/(app)/portal/components/project-overview"
import { RecentUpdates } from "@/app/(app)/portal/components/recent-updates"
import data from "./data.json"

export default function Page() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
          priority
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <ProjectOverview />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <RecentUpdates />
        <DataTable data={data} />
      </div>
    </>
  )
}
