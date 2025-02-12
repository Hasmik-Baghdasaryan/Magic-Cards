import { Outlet } from "react-router-dom";

import Header from "components/layouts/Header/Header";
import Main from "components/layouts/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
