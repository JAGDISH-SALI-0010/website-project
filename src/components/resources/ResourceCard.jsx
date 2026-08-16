import styles from "./ResourceCard.module.css";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";

export default function ResourceCard({ resource }) {
  const getDifficultyVariant = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "warning";
      case "Advanced":
        return "primary";
      default:
        return "default";
    }
  };

  // Determine Format tag label and icon
  const getFormatLabel = () => {
    if (resource.format && resource.fileSize) {
      return `📄 ${resource.format} • ${resource.fileSize}`;
    }
    if (resource.format) {
      return `📄 ${resource.format}`;
    }
    if (resource.category === "Books") return "📄 PDF Book";
    if (resource.category === "Cheat Sheets") return "📋 PDF Sheet";
    if (resource.category === "YouTube Channels") return "🎥 Video Series";
    if (resource.category === "Courses") return "🎓 Interactive Course";
    return "🌐 Web Resource";
  };

  // Smart Button Label
  const getButtonText = () => {
    if (resource.category === "YouTube Channels") return "Visit Channel ↗";
    if (resource.category === "Books") return "Open PDF / Drive ↗";
    if (resource.category === "Cheat Sheets") return "Open Cheat Sheet ↗";
    if (resource.category === "Official Documentation") return "View Docs ↗";
    return "Official Website ↗";
  };

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.badgesLeft}>
            <Badge variant="default">{resource.category}</Badge>
            <Badge variant={getDifficultyVariant(resource.difficulty)}>
              {resource.difficulty}
            </Badge>
          </div>
          <span className={styles.formatBadge}>{getFormatLabel()}</span>
        </div>
        
        <h3 className={styles.title}>{resource.title}</h3>
        <p className={styles.description}>{resource.description}</p>
        
        <div className={styles.footer}>
          <Button href={resource.website} variant="secondary" className={styles.button}>
            {getButtonText()}
          </Button>
        </div>
      </div>
    </article>
  );
}
