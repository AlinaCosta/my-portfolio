import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  const { title, description, projectLink, codeLink, image, key } = props;
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectImg}>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={projectLink} target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={codeLink} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};

export default Project;
