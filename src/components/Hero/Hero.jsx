import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import heroImg from "../../assets/ME.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import whatsApplight from "../../assets/BLA.svg";
import whatsAppDark from "../../assets/WHITE.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "..//../common/ThemeContent";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const whatsAppIcon = theme === "light" ? whatsApplight : whatsAppDark;
  const linkedInIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Anuj <br /> Banote
        </h1>
        <h2>Frontend Developer</h2>
        <div className={styles.social}>
          <span>
            <a href="https://wa.me/qr/7Y2GMW2LZOKBD1" target="_blank">
              <img src={whatsAppIcon} alt="WhatsApp Icon" />
            </a>
          </span>
          <span>
            <a href="https://github.com/AnujBanote" target="_blank">
              <img src={githubIcon} alt="Github Icon" />
            </a>
          </span>
          <span>
            <a
              href="https://linkedin.com/in/anuj-banote-379250232"
              target="_blank"
            >
              <img src={linkedInIcon} alt="Linkedin Icon" />
            </a>
          </span>
        </div>
        <p className={styles.description}>
          Where design meets development- building fast, beautiful, and
          functional web apps.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
