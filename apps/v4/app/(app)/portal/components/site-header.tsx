import { IconMessageCircleFilled } from "@tabler/icons-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-(--header-height) shrink-0 items-center gap-2 border-b bg-background/90 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-4 px-4 lg:px-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-base font-medium md:text-lg">
              Website Redesign Dashboard
            </h1>
            <Badge variant="outline">In Progress</Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Acme Inc. · Start Date: Apr 1, 2026 · Expected Completion: May 15, 2026
          </p>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="hidden h-8 sm:flex">
            <IconMessageCircleFilled className="size-4" />
            <span>Contact Support</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
