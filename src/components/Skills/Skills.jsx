import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "..//../common/ThemeContent";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill="HTML" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="CSS" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="JavaScript" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="React.js" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="Python Basics" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill="MySQl" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="BootStrap" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="RESTfUL-APIs" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="Github" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill="Problem-Solving" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="Time Management" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="Leadership" />
        <SkillList checkMarkIcon={checkMarkIcon} skill="Team Collaboration" />
      </div>
    </section>
  );
}

export default Skills;
