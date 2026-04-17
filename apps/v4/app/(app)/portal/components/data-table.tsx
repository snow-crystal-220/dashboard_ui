"use client"

import { IconAlertCircle, IconCircleCheckFilled, IconClockHour4, IconProgress } from "@tabler/icons-react"
import { z } from "zod"

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

export const schema = z.object({
  id: z.number(),
  task: z.string(),
  status: z.string(),
  dueDate: z.string(),
  priority: z.string(),
  lastUpdated: z.string(),
})

function StatusBadge({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <Badge variant="outline" className="gap-1.5 px-2 text-muted-foreground">
        <IconCircleCheckFilled className="size-4 fill-green-500 dark:fill-green-400" />
        {status}
      </Badge>
    )
  }

  if (status === "Blocked") {
    return (
      <Badge variant="outline" className="gap-1.5 px-2 text-muted-foreground">
        <IconAlertCircle className="size-4 text-red-500" />
        {status}
      </Badge>
    )
  }

  if (status === "In Progress" || status === "Testing") {
    return (
      <Badge variant="outline" className="gap-1.5 px-2 text-muted-foreground">
        <IconProgress className="size-4" />
        {status}
      </Badge>
    )
  }

  return (
    <Badge variant="outline" className="gap-1.5 px-2 text-muted-foreground">
      <IconClockHour4 className="size-4" />
      {status}
    </Badge>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  return (
    <Badge variant="secondary" className="px-2">
      {priority}
    </Badge>
  )
}

export function DataTable({
  data,
}: {
  data: z.infer<typeof schema>[]
}) {
  return (
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Tasks</CardTitle>
          <CardDescription>
            Current client-facing tasks and delivery progress
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 sm:px-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[220px]">Task</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length ? (
                  data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.task}</TableCell>
                      <TableCell>
                        <StatusBadge status={item.status} />
                      </TableCell>
                      <TableCell>{item.dueDate}</TableCell>
                      <TableCell>
                        <PriorityBadge priority={item.priority} />
                      </TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                      No active tasks available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
