import UsersSideBar from "./UsersSideBar/UsersSideBar";
import CardsList from "../CardsList/CardsList";

import styles from "./FeedPage.module.scss";

function FeedPage() {
  return (
    <div className={styles["feed-page"]}>
      <UsersSideBar />
      <CardsList />
    </div>
  );
}

export default FeedPage;
