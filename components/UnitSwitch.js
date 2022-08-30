import styles from "./UnitSwitch.module.css";

export const UnitSwitch = ({ onClick, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.active : styles.inactive
        }`}
        onClick={onClick}
      >
        Metric System
      </p>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.inactive : styles.active
        }`}
        onClick={onClick}
      >
        Imperial System
      </p>

      <text textalign="center">
        <a style="font-style:mono">Built in India by with ❤️</a>
        <a
          style="font-style: mono; color:Orange;"
          href="https://www.github.com/hackelite01"
        >
          Mayank Rajput👻
        </a>
      </text>
    </div>
  );
};
