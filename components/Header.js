import Link from "next/link";
import Navbar from "./Navbar";


function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Logo</Link>
      </div>
    <Navbar></Navbar>
      <div className="sub-bar"></div>
      <p>Search</p>
    </header>
  );
}

export default Header;
