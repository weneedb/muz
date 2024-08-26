import { StrictMode } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Main from "../components/Main";
import Play from "../components/Play";
import List from "../components/List";

function Homeview() {
  return (
    <>
      <StrictMode>
        <Header />
        <Menu />
        <Main>
          <Play />
          <List />
        </Main>
      </StrictMode>
    </>
  );
}
export default Homeview;
