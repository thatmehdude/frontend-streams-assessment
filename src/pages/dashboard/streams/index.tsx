import Layout from "@/components/layouts";
import { SectionCard } from "@/components/ask-stream/SectionCard";
import { DataSourceList } from "@/components/ask-stream/DataSourceList";
import { askStreamData } from "@/data/askStream";
import { AskStreamHeader } from "@/components/ask-stream/AskStreamHeader";

export default function Streams() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <AskStreamHeader />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <SectionCard
              title={askStreamData.section1.title}
              heading={askStreamData.section1.heading}
              content={askStreamData.section1.content}
              chip={askStreamData.section1.chip}
            />

            <div className="relative">
              {askStreamData.section2.map((card, index) => (
                <div
                  key={card.id}
                  className={index === 0 ? "relative z-10" : "hidden"}
                >
                  <SectionCard
                    title={card.title}
                    heading={card.heading}
                    content={card.content}
                    variant="purple"
                  />
                </div>
              ))}
            </div>

            <SectionCard
              title={askStreamData.section3.title}
              heading={askStreamData.section3.heading}
              content={askStreamData.section3.content}
            />
          </div>

          <div className="lg:col-span-1">
            <DataSourceList entries={askStreamData.dataSources} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
