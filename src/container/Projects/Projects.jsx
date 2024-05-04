import React from "react";
import Project from "../../components/Project/Project";
import { data } from "../../utils";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Portfolio</h2>
      <div className={styles.projects__items}>
        {data.map((project) => (
          <Project
            image={project.image}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            codeLink={project.codeLink}
            key={project.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
