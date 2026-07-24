import SectionHeading from "@/components/shared/SectionHeading";

export const metadata = {
  title: "About | PyDisciple",
  description: "Learn more about PyDisciple and our mission to help developers master Python.",
};

export default function AboutPage() {
  return (
    <div className="fade-in" style={{ padding: "4rem 0" }}>
      <div className="container">
        <SectionHeading 
          title="About PyDisciple" 
          subtitle="Curating the best of the Python ecosystem." 
        />
        
        <div style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.8 }} className="slide-up">
          <p style={{ marginBottom: "1.5rem" }}>
            PyDisciple is a curated learning platform built to help developers master Python through carefully selected resources. We focus on quality over quantity, so you can spend less time searching and more time learning.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            From official documentation and roadmaps to books, courses, tools, and real-world projects, every resource is thoughtfully selected to support your learning journey.
          </p>
          <p>
            Whether you are just starting out with <code>print("Hello, World!")</code> or building advanced Python applications, PyDisciple is designed to grow with you. Our mission is simple: help you master Python—without the noise.
          </p>
        </div>
      </div>
    </div>
  );
}
