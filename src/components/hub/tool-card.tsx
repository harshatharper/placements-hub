import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const statusConfig = {
  live: { label: "Live", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "in-progress": { label: "In Progress", className: "bg-amber-50 text-amber-700 border-amber-200" },
  pending: { label: "Pending", className: "bg-muted text-muted-foreground" },
};

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  status: "live" | "in-progress" | "pending";
  external?: boolean;
  download?: boolean;
}

export function ToolCard({ title, description, href, icon: Icon, status, external, download }: ToolCardProps) {
  const s = statusConfig[status];
  const isClickable = href !== "#";

  const card = (
    <Card className={`transition-all duration-200 ${isClickable ? "hover:shadow-md hover:border-ember-blue/20 cursor-pointer" : "opacity-60"}`}>
      <CardHeader className="p-5">
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <Badge variant="outline" className={s.className}>
            {s.label}
          </Badge>
        </div>
        <div className="mt-4">
          <CardTitle className="text-base font-semibold flex items-center gap-1.5">
            {title}
            {download && <Download className="h-3.5 w-3.5 text-muted-foreground" />}
            {external && !download && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />}
          </CardTitle>
          <CardDescription className="text-sm mt-1 leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );

  if (!isClickable) return card;

  if (download) {
    return (
      <a href={href} download>
        {card}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {card}
    </a>
  );
}
