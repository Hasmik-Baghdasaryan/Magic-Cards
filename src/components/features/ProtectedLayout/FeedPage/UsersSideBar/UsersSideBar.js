import { useSelector } from "react-redux";

import { NO_OTHER_USERS_FOUND_MSG } from "constants/constants";

import styles from "./UsersSideBar.module.scss";
import { Link } from "react-router-dom";

function UsersSideBar() {
  const { users, user } = useSelector((state) => state.auth);

  const filteredUsers = users.filter((current) => current.id !== user.id);

  if (!filteredUsers.length)
    return (
      <div className={styles["users-sidebar"]}>
        <p>{NO_OTHER_USERS_FOUND_MSG}</p>
      </div>
    );

  return (
    <div className={styles["users-sidebar"]}>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersSideBar;
