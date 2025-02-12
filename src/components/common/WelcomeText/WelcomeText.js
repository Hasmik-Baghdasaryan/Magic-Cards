import styles from "./WelcomeText.module.scss";

function WelcomeText({ title, text }) {
  return (
    <article>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default WelcomeText;
