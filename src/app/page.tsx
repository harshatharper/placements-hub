import { UserButton } from "@clerk/nextjs";
import { ToolCard } from "@/components/hub/tool-card";
import {
  Zap,
  Mail,
  Brain,
  Phone,
  MessageSquare,
  Hash,
  Video,
  Puzzle,
} from "lucide-react";

const tools = [
  {
    title: "Placements Dashboard",
    description:
      "Centralized submission tracking, quote statuses, metrics, underwriter assignments",
    href: "https://placements-dashboard-production.up.railway.app/dashboard",
    icon: Zap,
    status: "live" as const,
    external: true,
  },
  {
    title: "Email Client",
    description: "Underwriter email communication — send, receive, search",
    href: "https://mail.harperinsure.com",
    icon: Mail,
    status: "live" as const,
    external: true,
  },
  {
    title: "Submission Intelligence",
    description: "AI-powered submission diligence and analysis page",
    href: "https://submission-dashboard-production.up.railway.app/",
    icon: Brain,
    status: "live" as const,
    external: true,
  },
  {
    title: "Tether (Phone)",
    description: "Phone system for placement calls",
    href: "#",
    icon: Phone,
    status: "pending" as const,
  },
  {
    title: "Underwriter Insights",
    description:
      "AI-powered underwriter insights and market intel — powered by /insight in Slack",
    href: "https://www.notion.so/8da3218a3e9f4cec8cc7679394fc7b31",
    icon: MessageSquare,
    status: "live" as const,
    external: true,
  },
  {
    title: "Placements Slack Channel",
    description:
      "Team communication, updates, and real-time coordination for placements",
    href: "https://harper-insure.slack.com/archives/C0AQXBBHT5G",
    icon: Hash,
    status: "live" as const,
    external: true,
  },
  {
    title: "Training Videos",
    description:
      "Walkthroughs and onboarding videos for placements tools and processes",
    href: "#",
    icon: Video,
    status: "pending" as const,
  },
];

const resources = [
  {
    title: "Harper Remarket Extension",
    description:
      "Chrome extension to submit remarket requests directly from Big Brother company pages. Download, unzip, and follow the included setup guide.",
    href: "/downloads/harper-remarket-extension.zip",
    icon: Puzzle,
    status: "live" as const,
    download: true,
  },
];

export default function HubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Harper blue */}
      <header className="bg-ember-blue text-ember-creme">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-ember-salmon flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h1 className="text-lg font-semibold tracking-tight">
                Harper Placements
              </h1>
            </div>
            <UserButton />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Placements Hub
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            Your launchpad to every tool in the placements stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>

        {/* Resources section */}
        <div className="mt-14 mb-10">
          <h2 className="text-2xl font-bold tracking-tight">
            Resources
          </h2>
          <p className="text-muted-foreground mt-1.5 text-sm">
            Downloads and setup materials for the placements team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <ToolCard key={resource.title} {...resource} />
          ))}
        </div>
      </main>
    </div>
  );
}
