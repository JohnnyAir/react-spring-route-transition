import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ bg }) => bg || "white"};
`;

const Nav = styled.nav``;

const NavBar = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => history.goBack()}>Go Back</button>
      <Nav>
        <Link to="/"> Page 1 </Link>
        <Link to="/page2"> Page 2 </Link>
        <Link to="/page3"> Page 3 </Link>
      </Nav>
    </>
  );
};

export function PageOne() {
  return (
    <Page bg="tomato">
      <NavBar />
      <h1>Home Page</h1>
    </Page>
  );
}

export function PageTwo() {
  return (
    <Page bg="purple">
      <NavBar />
      <h1>Page two</h1>
    </Page>
  );
}

export function PageThree() {
  return (
    <Page bg="grey">
      <NavBar />
      <h1>Page three</h1>
    </Page>
  );
}
