import SectionHeading from "@/components/shared/SectionHeading";

export const metadata = {
  title: "About | Python Resources Hub",
  description: "Learn more about the Python Resources Hub project.",
};

export default function AboutPage() {
  return (
    <div className="fade-in" style={{ padding: "4rem 0" }}>
      <div className="container">
        <SectionHeading 
          title="About the Hub" 
          subtitle="Curating the best of the Python ecosystem." 
        />
        
        <div style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.8 }} className="slide-up">
          <p style={{ marginBottom: "1.5rem" }}>
            The Python Resources Hub is a minimal, focused directory built to help developers of all skill levels find high-quality learning materials without the clutter.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            We believe that finding great documentation, tutorials, and courses should be as seamless and beautiful as the language itself. That's why we've designed this hub with an emphasis on simplicity, performance, and typography.
          </p>
          <p>
            Whether you are just starting out with <code>print("Hello, World!")</code> or you are scaling complex machine learning pipelines, this hub is designed to grow with you.
          </p>
        </div>
      </div>
    </div>
  );
}
