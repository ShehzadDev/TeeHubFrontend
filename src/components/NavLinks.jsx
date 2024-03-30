import Link from "./Link";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

function NavLinks() {
  return (
    <div className="flex">
      <Link href="#" text="Home" isCurrent={true} />
      <Link href="#" text="Services" />
      <Link href="#" text="About us" />
      <Link href="#" text="Start Designing" isStyled={true} />
      <Link href="#" text={<GrFavorite size={20} />} />
      <Link href="#" text={<FiShoppingCart size={20} />} />
    </div>
  );
}

export default NavLinks;
