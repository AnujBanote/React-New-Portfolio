import styles from "..//./Projects/ProjectsStyles.module.css";
import EventHub from "../../assets/EventHUb.png";
import ProjectCard from "../../common/ProjectCard";
import Portfolio from "../../assets/portfolio.png";
import Matpy from "../../assets/mapty.png";
import Bankist from "../../assets/Bankit.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={Portfolio}
          link="https://github.com/AnujBanote/AnujPortfolioNew"
          h3="Portfolio"
          p="Personal Portfolio Webpage"
        />
        <ProjectCard
          src={EventHub}
          link="https://github.com/AnujBanote/Event-Managament-System"
          h3="Event Hub"
          p="Event Management App"
        />
        <ProjectCard
          src={Matpy}
          link="https://github.com/AnujBanote/Mapty-App"
          h3="Mapty App"
          p=" Workout tracking on Map"
        />
        <ProjectCard
          src={Bankist}
          link="https://github.com/AnujBanote/Bankist-App"
          h3="Bankist App"
          p="Banking web application"
        />
      </div>
    </section>
  );
}

export default Projects;
