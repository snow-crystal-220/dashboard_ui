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

  if (status === "In Progress") {
    return (
      <Badge className="gap-1.5 border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-100">
        <IconProgress className="size-4" />
        {status}
      </Badge>
    )
  }

  if (status === "Testing") {
    return (
      <Badge className="gap-1.5 border-yellow-200 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
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
