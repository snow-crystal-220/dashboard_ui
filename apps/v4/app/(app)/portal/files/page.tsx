import { IconDownload, IconFileDescription, IconFileSpreadsheet, IconFileText } from "@tabler/icons-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const files = [
  {
    id: 1,
    name: "Homepage Wireframe.pdf",
    category: "Design",
    uploadedAt: "Apr 10, 2026",
    type: "pdf",
  },
  {
    id: 2,
    name: "SEO Audit Report.docx",
    category: "Report",
    uploadedAt: "Apr 12, 2026",
    type: "doc",
  },
  {
    id: 3,
    name: "Content Plan.xlsx",
    category: "Planning",
    uploadedAt: "Apr 15, 2026",
    type: "sheet",
  },
]

function FileIcon({ type }: { type: string }) {
  if (type === "pdf") return <IconFileDescription className="size-5" />
  if (type === "sheet") return <IconFileSpreadsheet className="size-5" />
  return <IconFileText className="size-5" />
}

export default function FilesPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Files</CardTitle>
          <CardDescription>
            Project documents and shared resources available for review.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-muted-foreground">
                    <FileIcon type={file.type} />
                  </div>
                  <div>
                    <div className="font-medium">{file.name}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{file.category}</Badge>
                      <span>Uploaded: {file.uploadedAt}</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full md:w-auto">
                  <IconDownload className="size-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
