import { Outlet } from "react-router-dom";

import Header from "components/layouts/Header/Header";
import Main from "components/layouts/Main/Main";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default App;
