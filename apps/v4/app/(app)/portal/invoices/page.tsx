import { IconReceipt2 } from "@tabler/icons-react"

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

const invoices = [
  {
    id: 1,
    invoiceNumber: "INV-1008",
    issuedDate: "Apr 01, 2026",
    dueDate: "Apr 10, 2026",
    amount: "$1,200",
    status: "Paid",
  },
  {
    id: 2,
    invoiceNumber: "INV-1009",
    issuedDate: "Apr 15, 2026",
    dueDate: "Apr 25, 2026",
    amount: "$800",
    status: "Pending",
  },
]

function InvoiceStatusBadge({ status }: { status: string }) {
  if (status === "Paid") {
    return (
      <Badge className="border-green-200 bg-green-100 text-green-700 hover:bg-green-100">
        {status}
      </Badge>
    )
  }

  return (
    <Badge className="border-yellow-200 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
      {status}
    </Badge>
  )
}

export default function InvoicesPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconReceipt2 className="size-5 text-muted-foreground" />
            <CardTitle>Invoices</CardTitle>
          </div>
          <CardDescription>
            Invoice history and current billing status for this project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Issued Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">
                      {invoice.invoiceNumber}
                    </TableCell>
                    <TableCell>{invoice.issuedDate}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <InvoiceStatusBadge status={invoice.status} />
                    </TableCell>
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
