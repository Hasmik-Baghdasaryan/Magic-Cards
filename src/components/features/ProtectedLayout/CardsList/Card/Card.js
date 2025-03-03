import { getUserById, dateFormatter } from "helpers/utility";

import styles from "./Card.module.scss";

function Card({ card }) {
  const { title, description, creationDate, userId } = card;
  const user = getUserById(userId);

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <span className={styles.date}>{dateFormatter(creationDate)}</span>
      <p>{description}</p>
      <div className={styles["author-and-action-block"]}>
        {user && <p className={styles.author}>Author: {user?.name}</p>}
        <div className={styles["favorite-checkbox-block"]}>
          <input type="checkbox" id={`${card.id}favoriteCard`} />
          <label htmlFor={`${card.id}favoriteCard`}>Favorite</label>
        </div>
      </div>
    </div>
  );
}

export default Card;
