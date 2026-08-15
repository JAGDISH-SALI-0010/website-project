import SectionHeading from "@/components/shared/SectionHeading";
import ResourceDirectory from "@/components/resources/ResourceDirectory";
import { Suspense } from "react";

export const metadata = {
  title: "Resources | PyDisciple",
 description: "Browse curated Python resources, books, courses, documentation, roadmaps, and tools on PyDisciple.",
};

export default function ResourcesPage() {
  return (
    <div className="fade-in" style={{ padding: "4rem 0" }}>
      <div className="container">
        <SectionHeading 
          title="Python Resources" 
          subtitle="Explore our comprehensive directory of the best Python learning materials available on the web." 
        />
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading resources...</div>}>
          <ResourceDirectory />
        </Suspense>
      </div>
    </div>
  );
}
