import { type FC } from "react";
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
  <div className="container color-white flex flex-row max-h-10 bg-deep-blue items-center">
    <div className="justify-self-start flex flex-row flex-grow h-12 items-center">
      <h2 className="pr-2">{ logo }</h2>
      <h3>{ subTitle }</h3>
    </div>
    <div className="justify-self-end items-center">
      <ul className="flex flex-row items-center h-full">
        {links.map((link) => {
          return (
            <Link key={ link.displayText } href={ link.anchor } className="px-5 self-center h-full hover:bg-light-blue rounded-full"><li>{ link.displayText }</li></Link>
          )
        })}
      </ul>
    </div>
  </div>
);

export default Navbar;
