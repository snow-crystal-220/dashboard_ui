import {
  IconBell,
  IconBug,
  IconChecklist,
  IconFlag3,
  IconMessageCircle2,
} from "@tabler/icons-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const updates = [
  {
    id: 1,
    type: "Announcement",
    title: "Design review scheduled",
    description:
      "The next stakeholder review is scheduled for Apr 24, 2026. Feedback will be collected and consolidated after the session.",
    date: "Apr 18, 2026",
  },
  {
    id: 2,
    type: "Milestone",
    title: "Homepage structure approved",
    description:
      "The homepage structure and content hierarchy were approved and moved into implementation.",
    date: "Apr 17, 2026",
  },
  {
    id: 3,
    type: "Task",
    title: "Mobile responsiveness fixes in progress",
    description:
      "Layout adjustments are being tested across tablet and mobile breakpoints to improve consistency.",
    date: "Apr 16, 2026",
  },
  {
    id: 4,
    type: "Bug Fix",
    title: "Contact form validation issue resolved",
    description:
      "Validation for incomplete email submissions was corrected and retested successfully.",
    date: "Apr 15, 2026",
  },
  {
    id: 5,
    type: "Client Note",
    title: "Content feedback received",
    description:
      "Client feedback for the services and about sections was received and added to the current revision cycle.",
    date: "Apr 14, 2026",
  },
]

function UpdateIcon({ type }: { type: string }) {
  if (type === "Milestone") return <IconFlag3 className="size-4" />
  if (type === "Task") return <IconChecklist className="size-4" />
  if (type === "Bug Fix") return <IconBug className="size-4" />
  if (type === "Client Note") return <IconMessageCircle2 className="size-4" />
  return <IconBell className="size-4" />
}

function UpdateBadge({ type }: { type: string }) {
  if (type === "Announcement") {
    return (
      <Badge className="border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-100">
        {type}
      </Badge>
    )
  }

  if (type === "Milestone") {
    return (
      <Badge className="border-green-200 bg-green-100 text-green-700 hover:bg-green-100">
        {type}
      </Badge>
    )
  }

  if (type === "Bug Fix") {
    return (
      <Badge className="border-yellow-200 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
        {type}
      </Badge>
    )
  }

  if (type === "Client Note") {
    return (
      <Badge className="border-purple-200 bg-purple-100 text-purple-700 hover:bg-purple-100">
        {type}
      </Badge>
    )
  }

  return <Badge variant="outline">{type}</Badge>
}

export default function UpdatesPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Updates</CardTitle>
          <CardDescription>
            Recent activity, milestone progress, fixes, and announcements for your project.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {updates.map((update, index) => (
              <div key={update.id} className="relative pl-6">
                {index !== updates.length - 1 && (
                  <span className="absolute top-6 left-[7px] h-[calc(100%+10px)] w-px bg-border" />
                )}

                <span className="absolute top-1 left-0 flex size-4 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <UpdateIcon type={update.type} />
                </span>

                <div className="rounded-xl border p-4">
                  <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="font-medium">{update.title}</div>
                    <UpdateBadge type={update.type} />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {update.description}
                  </p>

                  <div className="mt-3 text-xs text-muted-foreground">
                    {update.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
