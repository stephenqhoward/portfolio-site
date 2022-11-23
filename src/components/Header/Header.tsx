import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface Link {
  displayText: string;
  anchor: string;
}
interface Links {
  links: Link[];
}

const Header: FC<Links> = ({ links }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasFade, setHasFade] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      // TODO: Better to use React Animation Library
      setTimeout(() => setHasFade(true), 150);
    }
    setHasFade(false);
  }, [isExpanded]);

  return (
    <header
      className={`relative container mx-auto ${isExpanded ? "expanded" : ""}`}
    >
      <div
        className={`${
          !isExpanded ? "fixed" : ""
        } top-0 md:absolute bg-white md:bg-transparent w-full`}
      >
        <div className="flex px-8 py-4 items-center">
          <a href="/">
            <Image src="/logo.png" width={41} height={38}></Image>
          </a>
          <ul
            className={`hidden md:flex md:mx-auto md:w-full md:max-w-3xl ${
              isExpanded ? "open" : ""
            }`}
          >
            {links.map((link) => (
              <li
                key={link.displayText}
                className={`w-full text-center ${hasFade ? "fade-in" : ""}`}
              >
                <a
                  className="text-black md:text-white py-4 w-full block hover:underline"
                  href={link.anchor}
                  onClick={() =>
                    window.innerWidth < 768 ? setIsExpanded(!isExpanded) : null
                  }
                >
                  {link.displayText}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="ml-auto md:hidden"
            onClick={(e) => handleClick(e)}
          >
            {isExpanded ? (
              <i className="icofont-close"></i>
            ) : (
              <i className="icofont-navigation-menu"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
