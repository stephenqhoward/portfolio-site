import { FC } from "react";
import Link from 'next/link';
// import heroStyles from "./Hero.module.css";

type link = {
  displayText: string;
  anchor: string;
}

type NavbarProps = {
  logo?: string;
  subTitle?: string;
  links: link[];
};

const Navbar: FC<NavbarProps> = ({ logo, subTitle, links }) => (
  <div className="container color-white px-4">
    <div>
      { logo }
      <h2>{ subTitle }</h2>
    </div>
    <div>
      <ul>
        {links.map((link) => {
          return (
            <li key={ link.displayText }><Link href={ link.anchor }>{ link.displayText }</Link></li>
          )
        })}
      </ul>
    </div>
  </div>
);

export default Navbar;
