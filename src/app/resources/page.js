import SectionHeading from "@/components/shared/SectionHeading";
import ResourceDirectory from "@/components/resources/ResourceDirectory";

export const metadata = {
  title: "All Resources | Python Resources Hub",
  description: "Browse all curated Python resources including courses, books, and tutorials.",
};

export default function ResourcesPage() {
  return (
    <div className="fade-in" style={{ padding: "4rem 0" }}>
      <div className="container">
        <SectionHeading 
          title="Python Resources" 
          subtitle="Explore our comprehensive directory of the best Python learning materials available on the web." 
        />
        <ResourceDirectory />
      </div>
    </div>
  );
}
