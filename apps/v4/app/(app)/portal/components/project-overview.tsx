import { IconCalendarEvent, IconCircleCheckFilled, IconFlag3, IconProgress } from "@tabler/icons-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const milestones = [
  {
    id: 1,
    title: "Discovery & Planning",
    dueDate: "Apr 8, 2026",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Review",
    dueDate: "Apr 24, 2026",
    status: "In Progress",
  },
  {
    id: 3,
    title: "QA & Final Revisions",
    dueDate: "May 4, 2026",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Launch Preparation",
    dueDate: "May 12, 2026",
    status: "Upcoming",
  },
]

function MilestoneBadge({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <Badge className="border-green-200 bg-green-100 text-green-700 hover:bg-green-100">
        {status}
      </Badge>
    )
  }

  if (status === "In Progress") {
    return (
      <Badge className="border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-100">
        {status}
      </Badge>
    )
  }

  return (
    <Badge variant="outline">
      {status}
    </Badge>
  )
}

export function ProjectOverview() {
  return (
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader className="gap-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <CardTitle className="text-xl">Project Overview</CardTitle>
              <CardDescription>
                A quick summary of project progress, dates, and upcoming milestones.
              </CardDescription>
            </div>

            <Badge className="w-fit border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-100">
              In Progress
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <IconCalendarEvent className="size-4" />
                Key Dates
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between gap-4">
                  <span>Start Date</span>
                  <span className="font-medium text-foreground">Apr 1, 2026</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Expected Completion</span>
                  <span className="font-medium text-foreground">May 15, 2026</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Actual Completion</span>
                  <span className="font-medium text-foreground">—</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <IconProgress className="size-4" />
                Overall Progress
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-semibold">68%</span>
                </div>
                <Progress value={68} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Progress is based on completed milestones and visible client tasks.
                </p>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <IconFlag3 className="size-4" />
                Next Milestone
              </div>
              <div className="space-y-2">
                <div className="text-base font-semibold">Design Review</div>
                <div className="text-sm text-muted-foreground">
                  Scheduled for Apr 24, 2026
                </div>
                <p className="text-sm text-muted-foreground">
                  This milestone includes stakeholder feedback and approval before final revisions.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Milestones</h3>
              <p className="text-sm text-muted-foreground">
                Upcoming checkpoints and completed delivery stages.
              </p>
            </div>

            <div className="grid gap-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <IconCircleCheckFilled className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">{milestone.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Due: {milestone.dueDate}
                      </div>
                    </div>
                  </div>

                  <MilestoneBadge status={milestone.status} />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
