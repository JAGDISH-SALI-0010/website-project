import SectionHeading from "@/components/shared/SectionHeading";
import ResourceDirectory from "@/components/resources/ResourceDirectory";
import { Suspense } from "react";

export const metadata = {
  title: 'Python Resources',
  description:
    'Browse a hand-picked directory of the best Python learning resources — books, video courses, official documentation, structured roadmaps, cheat sheets, and developer tools — all free to access.',
  openGraph: {
    title: 'Python Resources — PyDisciple',
    description:
      'Hand-picked Python books, courses, docs, roadmaps, and tools. Everything a Python learner needs, curated in one place.',
    url: 'https://pydisciple.vercel.app/resources',
  },
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
