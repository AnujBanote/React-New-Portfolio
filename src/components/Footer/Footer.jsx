import styles from "./Footerstyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Anuj Banote. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
