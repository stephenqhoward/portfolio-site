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
  <div className="container color-white flex flex-row max-h-10 scroll-smooth">
    <div className="justify-self-start flex flex-row flex-grow">
      <h2 className="pr-2">{ logo }</h2>
      <h3>{ subTitle }</h3>
    </div>
    <div className="justify-self-end">
      <ul className="flex flex-row">
        {links.map((link) => {
          return (
            <li key={ link.displayText } className="px-5"><Link href={ link.anchor }>{ link.displayText }</Link></li>
          )
        })}
      </ul>
    </div>
  </div>
);

export default Navbar;
