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
        "relative py-6 pl-6 pr-8 shadow-sm",
        isPurple 
          ? "bg-linear-to-br from-[#E9E4F0] to-[#D4C5E8] rounded-lg" 
          : "border bg-white"
      )}
      style={style}
    >
      
      <div className="relative">
        <h3 className={cn(
          "mb-10 text-2xl font-semibold leading-8 tracking-[-0.25px]",
          isPurple ? "text-gray-900" : "text-foreground"
        )} style={{ fontFamily: "Bricolage Grotesque" }}>
          {title}
        </h3>
        
        <h4 className={cn(
          "mb-4 text-[20px] font-medium leading-7 tracking-[-0.25px]",
          isPurple ? "text-gray-900" : "text-foreground"
        )} style={{fontFamily: "Inter"}}>
          {heading}
        </h4>
        
        <p className={cn(
          "text-[16px] font-normal leading-6 tracking-[0px]",
          isPurple ? "text-gray-700" : "text-muted-foreground"
        )} style={{fontFamily: "Inter"}}>
          {content}
        </p>
        
        {chip && (
          <div className="mt-4 inline-flex">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
              {chip}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}