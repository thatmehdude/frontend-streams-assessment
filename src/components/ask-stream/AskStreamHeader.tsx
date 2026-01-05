import AppButton from "@/components/ui/app-button";

export function AskStreamHeader() {
  return (
    <div className="mb-8 gap-11 py-20">
      <div className="mb-6">
        <h1
          className="mb-2 text-[57px] font-semibold leading-16 tracking-[-0.25px]"
          style={{ fontFamily: "Bricolage Grotesque" }}
        >
          <span className="text-primary">Ask</span>{" "}
          <span className="text-foreground">Stream</span>
        </h1>
        <p className="mb-2 text-[57px] font-semibold leading-16 tracking-[-0.25px]" style={{ color: '#CAC4D0' }}>lorem ipsum</p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Ask anything"
          className="w-full rounded-lg border bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-primary">+ Beta</span>
          <span className="text-xs text-muted-foreground">
            Conversational Analytics
          </span>
          <AppButton size="sm" className="ml-auto">
            Analyze
          </AppButton>
        </div>
      </div>
    </div>
  );
}