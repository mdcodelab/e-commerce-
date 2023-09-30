import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #e1e1e1;
    --white: #ededed;
    --shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0; padding: 0;
  }

  body {
    font-size: 1.6rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: all 2s ease;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Page({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <InnerStyle>{children}</InnerStyle>
    </div>
  );
}

const InnerStyle = styled.div `
margin: 0 auto;
padding: 2rem;
`;

export default Page;
