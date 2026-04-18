import {
  IconAlertCircle,
  IconCircleCheckFilled,
  IconClockHour4,
  IconProgress,
} from "@tabler/icons-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york-v4/ui/table"

const tasks = [
  {
    id: 1,
    task: "Homepage UI refinement",
    status: "In Progress",
    dueDate: "Apr 20, 2026",
    priority: "High",
    lastUpdated: "Apr 17, 2026",
  },
  {
    id: 2,
    task: "Mobile responsiveness fixes",
    status: "Testing",
    dueDate: "Apr 22, 2026",
    priority: "Medium",
    lastUpdated: "Apr 17, 2026",
  },
  {
    id: 3,
    task: "Contact form QA",
    status: "To Do",
    dueDate: "Apr 24, 2026",
    priority: "Medium",
    lastUpdated: "Apr 16, 2026",
  },
  {
    id: 4,
    task: "Final stakeholder review prep",
    status: "Blocked",
    dueDate: "Apr 26, 2026",
    priority: "High",
    lastUpdated: "Apr 15, 2026",
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <Badge className="gap-1.5 border-green-200 bg-green-100 text-green-700 hover:bg-green-100">
        <IconCircleCheckFilled className="size-4 fill-green-600" />
        {status}
      </Badge>
    )
  }

  if (status === "Blocked") {
    return (
      <Badge className="gap-1.5 border-red-200 bg-red-100 text-red-700 hover:bg-red-100">
        <IconAlertCircle className="size-4" />
        {status}
      </Badge>
    )
  }

  if (status === "In Progress" || status === "Testing") {
    return (
      <Badge className="gap-1.5 border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-100">
        <IconProgress className="size-4" />
        {status}
      </Badge>
    )
  }

  return (
    <Badge className="gap-1.5 border-muted bg-muted text-foreground hover:bg-muted">
      <IconClockHour4 className="size-4" />
      {status}
    </Badge>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  if (priority === "High") {
    return (
      <Badge className="border-red-200 bg-red-100 text-red-700 hover:bg-red-100">
        {priority}
      </Badge>
    )
  }

  return <Badge variant="outline">{priority}</Badge>
}

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
          <CardDescription>
            Current client-facing tasks, progress, and upcoming due dates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[240px]">Task</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.task}</TableCell>
                    <TableCell>
                      <StatusBadge status={task.status} />
                    </TableCell>
                    <TableCell>{task.dueDate}</TableCell>
                    <TableCell>
                      <PriorityBadge priority={task.priority} />
                    </TableCell>
                    <TableCell>{task.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
