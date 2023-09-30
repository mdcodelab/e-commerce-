import Link from "next/link";
import styled from "styled-components";



function Navbar() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account"></Link>
    </nav>
  );
}

export default Navbar;

