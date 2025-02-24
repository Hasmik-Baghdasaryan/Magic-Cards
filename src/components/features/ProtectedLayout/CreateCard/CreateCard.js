import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardModalButton from "./CardModalButton/CardModalButton";
import { createCard } from "store/slices/cardsSlice";

import styles from "./CreateCard.module.scss";

function CreateCard({ handleBtnClick }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [cardData, setCardData] = useState({
    title: "",
    description: "",
  });

  const handleCardDataChange = (ev) => {
    const { name, value } = ev.target;
    setCardData((prevCardData) => ({ ...prevCardData, [name]: value }));
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const creationDate = new Date().toDateString();
    dispatch(
      createCard({
        ...cardData,
        id: Date.now(),
        userId: user.id,
        creationDate,
      })
    );
    handleBtnClick();
  };

  const { title, description } = cardData;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={handleCardDataChange}
          className={styles.title}
        />
      </div>
      <div className={styles["field-wrapper"]}>
        <label htmlFor="description">Description</label>
        <textarea
          type="description"
          name="description"
          value={description}
          onChange={handleCardDataChange}
          className={styles.description}
        />
      </div>
      <div className={styles["actions-wrapper"]}>
        <CardModalButton buttonText="Cancel" handleClick={handleBtnClick} />
        <CardModalButton buttonText="Create" />
      </div>
    </form>
  );
}

export default CreateCard;
