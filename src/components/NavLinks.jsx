import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import Link from "./Link";

function NavLinks() {
  return (
    <div className="flex">
      <Link href="/" text="Home" isCurrent={true} />
      <Link href="/services" text="Services" />
      <Link href="/about" text="About us" />
      <Link href="/design" text="Start Designing" isStyled={true} />
      <Link href="/signin" text="Sign In" />
      {/* <Link href="/favorites" text={<GrFavorite size={20} />} />
      <Link href="/cart" text={<FiShoppingCart size={20} />} /> */}
    </div>
  );
}

export default NavLinks;
