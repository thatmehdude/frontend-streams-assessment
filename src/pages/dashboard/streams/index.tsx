import Layout from "@/components/layouts";
import { SectionCard } from "@/components/ask-stream/SectionCard";
import { DataSourceList } from "@/components/ask-stream/DataSourceList";
import { askStreamData } from "@/data/askStream";
import { AskStreamHeader } from "@/components/ask-stream/AskStreamHeader";
import { Separator } from "@/components/ui/separator";
import { CardStack } from "@/components/ask-stream/CardStack";
import { useState } from "react";

export default function Streams() {
  const [showCardStack, setShowCardStack] = useState(false);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <AskStreamHeader />
        <Separator className="my-8" />
        
        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="hidden lg:block lg:w-48 lg:shrink-0">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold">Bookmarks</h3>
                <div className="space-y-1">
                  <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground">
                    Why is sentiment dropping this...
                  </button>
                  <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground">
                    What do people dislike about...
                  </button>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">History</h3>
                <div className="space-y-1">
                  <button className="flex w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground">
                    <span>Today</span>
                    <span>-</span>
                  </button>
                  <button className="flex w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground">
                    <span>Last 7 days</span>
                    <span>-</span>
                  </button>
                  <button className="flex w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground">
                    <span>November</span>
                    <span>-</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 auto-rows-min">
            <SectionCard
              title={askStreamData.section1.title}
              heading={askStreamData.section1.heading}
              content={askStreamData.section1.content}
              chip={askStreamData.section1.chip}
            />

            <div 
              className="relative cursor-pointer p-4 border-r-2 border-t-2 pt-12"
              onClick={() => setShowCardStack(true)}
            >
              <SectionCard
                title={askStreamData.section2[0].title}
                heading={askStreamData.section2[0].heading}
                content={askStreamData.section2[0].content}
                variant="purple"
              />

              <div className="pointer-events-none absolute inset-0 -z-10 translate-y-2 scale-95 opacity-50">
                <SectionCard
                  title={askStreamData.section2[1]?.title || ""}
                  heading={askStreamData.section2[1]?.heading || ""}
                  content={askStreamData.section2[1]?.content || ""}
                  variant="purple"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 -z-20 translate-y-4 scale-90 opacity-30">
                <SectionCard
                  title={askStreamData.section2[2]?.title || ""}
                  heading={askStreamData.section2[2]?.heading || ""}
                  content={askStreamData.section2[2]?.content || ""}
                  variant="purple"
                />
              </div>
            </div>

            <SectionCard
              title={askStreamData.section3.title}
              heading={askStreamData.section3.heading}
              content={askStreamData.section3.content}
            />

            <DataSourceList entries={askStreamData.dataSources} />
          </div>
        </div>
      </div>

      {showCardStack && (
        <CardStack
          cards={askStreamData.section2}
          onClose={() => setShowCardStack(false)}
        />
      )}
    </Layout>
  );
}