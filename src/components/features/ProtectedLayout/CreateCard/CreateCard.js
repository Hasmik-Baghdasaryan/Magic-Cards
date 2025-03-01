import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardModalButton from "./CardModalButton/CardModalButton";
import Loader from "components/common/Loader/Loader";
import { createCard, resetCardAddingStatus } from "store/slices/cardsSlice";

import styles from "./CreateCard.module.scss";

function CreateCard({ handleBtnClick }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.cards);
  const [cardData, setCardData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (status === "success") {
      handleBtnClick();
      dispatch(resetCardAddingStatus());
    }
  }, [status, handleBtnClick, dispatch]);

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
        <CardModalButton
          buttonText="Create"
          isDisabled={!title || !description || status === "loading"}
        />
      </div>
      {status === "loading" && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
    </form>
  );
}

export default CreateCard;
