import { useSelector } from "react-redux";
import styles from "./CardsList.module.scss";
import SortingButton from "./SortingButton/SortingButton";
import Card from "./Card/Card";

function CardsList() {
  const cards = useSelector((state) => state.cards.allCards);
  const sortCardsList = function () {};
  return (
    <div className={styles["cards-list"]}>
      <div className={styles["sorting-action-block"]}>
        <div className={styles["sort-by-favorite"]}>
          <SortingButton
            buttonText="All"
            size="small"
            handleClick={sortCardsList}
          />
          <SortingButton buttonText="Favorites" size="small" />
        </div>
        <div className={styles["sort-by-date"]}>
          <SortingButton buttonText="From new to old" size="large" />
          <SortingButton buttonText="From old to new" size="large" />
        </div>
      </div>
      <ul>
        {cards?.length &&
          cards.map((card) => (
            <li key={card.id}>
              <Card card={card} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardsList;
