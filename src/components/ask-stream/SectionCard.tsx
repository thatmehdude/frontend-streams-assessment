import { cn } from "@/lib/utils";

type SectionCardProps = {
  title: string;
  heading: string;
  content: string;
  chip?: string;
  variant?: "default" | "purple";
  style?: React.CSSProperties;
}

export function SectionCard({ 
  title, 
  heading, 
  content, 
  chip,
  variant = "default",
  style 
}: SectionCardProps) {
  const isPurple = variant === "purple";
  
  return (
    <div 
      className={cn(
        "relative rounded-lg p-6 shadow-sm",
        isPurple 
          ? "bg-linear-to-br from-[#E9E4F0] to-[#D4C5E8]" 
          : "border bg-white"
      )}
      style={style}
    >
      
      <div className="relative">
        <h3 className={cn(
          "mb-4 text-sm font-semibold",
          isPurple ? "text-gray-900" : "text-foreground"
        )}>
          {title}
        </h3>
        
        <h4 className={cn(
          "mb-4 text-base font-semibold leading-tight",
          isPurple ? "text-gray-900" : "text-foreground"
        )}>
          {heading}
        </h4>
        
        <p className={cn(
          "text-sm leading-relaxed",
          isPurple ? "text-gray-700" : "text-muted-foreground"
        )}>
          {content}
        </p>
        
        {chip && (
          <div className="mt-4 inline-flex">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {chip}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}