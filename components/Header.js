import Link from "next/link";
import Navbar from "./Navbar";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Logo>
          <Link href="/">ModeElite</Link>
        </Logo>
      </div>
      <Navbar></Navbar>
      <div className="sub-bar"></div>
      <p>Search</p>
    </HeaderStyle>
  );
}

const Logo = styled.h1`
  background: red;
  text-align: center;
  width: max-content;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 4rem;
  transform: skew(-7deg);
  a {
    color: #fff;
    text-shadow: 2px 2px 5px #888, -2px -2px 5px #aaa;
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
`;

const HeaderStyle = styled.header`
.bar {
  border-bottom: 5px solid black;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;
}
.sub-bar {
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 5px solid black;
}
`;

export default Header;
