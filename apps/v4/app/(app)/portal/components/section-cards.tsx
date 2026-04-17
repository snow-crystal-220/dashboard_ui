import {
  IconAlertCircle,
  IconCalendarEvent,
  IconChecklist,
  IconProgress,
} from "@tabler/icons-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Project Status</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            In Progress
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconAlertCircle className="size-4" />
              Active
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex items-center gap-2 font-medium">
            Current delivery phase
          </div>
          <div className="text-muted-foreground">
            Work is actively moving forward
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Overall Progress</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            68%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconProgress className="size-4" />
              On Track
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex items-center gap-2 font-medium">
            Estimated completion progress
          </div>
          <div className="text-muted-foreground">
            Based on completed project milestones
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Next Milestone</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            Design Review
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconCalendarEvent className="size-4" />
              Apr 24
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex items-center gap-2 font-medium">
            Upcoming review checkpoint
          </div>
          <div className="text-muted-foreground">
            Feedback and approval scheduled this week
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Open Client Tasks</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            3
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconChecklist className="size-4" />
              Pending
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex items-center gap-2 font-medium">
            Visible project tasks in progress
          </div>
          <div className="text-muted-foreground">
            Only client-facing work items are shown
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
