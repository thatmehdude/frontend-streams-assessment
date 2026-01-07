import AppButton from "@/components/ui/app-button";

export function AskStreamHeader() {
  return (
    <div className="mb-8 flex flex-col items-center gap-11 py-20">
      <div className="mb-6 w-full max-w-2xl">
        <h1
          className="mb-2 text-[57px] font-semibold leading-16 tracking-[-0.25px]"
          style={{ fontFamily: "Bricolage Grotesque" }}
        >
          <span className="text-primary">Ask</span>{" "}
          <span className="text-foreground">Stream</span>
        </h1>
        <p
          className="mb-2 text-[57px] font-semibold leading-16 tracking-[-0.25px]"
          style={{ color: "#CAC4D0" }}
        >
          lorem ipsum
        </p>
      </div>

      <div className="relative w-full max-w-2xl border-2 rounded-lg">
        <input
          type="text"
          placeholder="Ask anything"
          className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <div className="mt-2 flex items-center justify-between px-4 pb-2">
          <div className="flex gap-1 items-center">
            <span className="rounded-full bg-primary/10 px-1 py-1 text-xs font-medium text-primary font-12">+ Beta</span>
            <span className="text-xs text-muted-foreground">
              Conversational Analytics
            </span>
          </div>
          <AppButton size="sm" className="bg-[#3C42571F]" style={{ color: "#CAC4D0" }}>
            Analyze
          </AppButton>
        </div>
      </div>
    </div>
  );
}