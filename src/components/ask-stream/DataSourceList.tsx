import { DataSourceEntry } from "@/types/section.types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

type DataSourceListProps = {
  entries: DataSourceEntry[];
}

export function DataSourceList({ entries }: DataSourceListProps) {
  return (
    <div className="border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">Data Source</h3>
        <button className="text-sm font-medium text-foreground">
          All <span className="ml-1">▼</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="flex gap-3">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarFallback className="bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {entry.author}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                  {entry.date}
                  <User className="h-3 w-3" />
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {entry.preview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}