import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    text: string;
    href: string;
    active: boolean;
}
const NavItem = ({ text, href, active }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <a href={href}>
      <div
        className={`nav__item ${
          pathname === href ? "active" : ""
        }`}
      >
        {text}
      </div>
    </a>
  );
};

export default NavItem;