"use client"

import * as React from "react"
import Link from "next/link"
import {
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconHome,
  IconReceipt,
  IconSearch,
  IconSettings,
  IconTimeline,
  IconInnerShadowTop,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar"
import { NavDocuments } from "@/app/(app)/portal/components/nav-documents"
import { NavMain } from "@/app/(app)/portal/components/nav-main"
import { NavSecondary } from "@/app/(app)/portal/components/nav-secondary"
import { NavUser } from "@/app/(app)/portal/components/nav-user"

const data = {
  user: {
    name: "Acme Client",
    email: "client@acme.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/portal",
      icon: IconHome,
    },
    {
      title: "Project",
      url: "/portal/project",
      icon: IconFolder,
    },
    {
      title: "Tasks",
      url: "/portal/tasks",
      icon: IconTimeline,
    },
    {
      title: "Updates",
      url: "/portal/updates",
      icon: IconFileDescription,
    },
  ],
  navSecondary: [
    {
      title: "Invoices",
      url: "/portal/invoices",
      icon: IconReceipt,
    },
    {
      title: "Help",
      url: "/portal/help",
      icon: IconHelp,
    },
    {
      title: "Settings",
      url: "/portal/settings",
      icon: IconSettings,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Files",
      url: "/portal/files",
      icon: IconFileDescription,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="none" className="h-auto border-r" {...props}>
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="/portal">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
