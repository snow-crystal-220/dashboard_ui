import { IconHelpCircle, IconMail, IconMessageCircle } from "@tabler/icons-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const faqs = [
  {
    question: "How often is the dashboard updated?",
    answer:
      "The dashboard is updated whenever new project progress, tasks, files, or announcements are added.",
  },
  {
    question: "Can I request changes directly from the portal?",
    answer:
      "Yes. Use the support/contact option to send feedback, clarification requests, or approval notes.",
  },
  {
    question: "Why do I only see some tasks?",
    answer:
      "Only client-facing tasks are shown here. Internal workflow and team-only tasks are hidden.",
  },
]

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconHelpCircle className="size-5 text-muted-foreground" />
            <CardTitle>Help & FAQ</CardTitle>
          </div>
          <CardDescription>
            Common questions and support options for your project portal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border p-4">
              <div className="font-medium">{faq.question}</div>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Need Support?</CardTitle>
          <CardDescription>
            Reach out for project questions, approvals, or urgent requests.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row">
          <Button className="w-full sm:w-auto">
            <IconMessageCircle className="size-4" />
            Contact Support
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <IconMail className="size-4" />
            Email Project Team
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
