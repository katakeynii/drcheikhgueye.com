import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    text: string;
    href: string;
    active: boolean;
    onClick: () => void;
}
const NavItem = ({ text, href, active, onClick }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <a href={href} onClick={onClick}>
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