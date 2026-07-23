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

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Badge variant="default">{resource.category}</Badge>
          <Badge variant={getDifficultyVariant(resource.difficulty)}>
            {resource.difficulty}
          </Badge>
        </div>
        
        <h3 className={styles.title}>{resource.title}</h3>
        <p className={styles.description}>{resource.description}</p>
        
        <div className={styles.footer}>
          <Button href={resource.website} variant="secondary" className={styles.button}>
            Official Website
          </Button>
        </div>
      </div>
    </article>
  );
}
