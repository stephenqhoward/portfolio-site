import Link from "next/link";

type link = {
  displayText: string;
  anchor: string;
};

type NavbarProps = {
  logo?: string;
  subTitle?: string;
  jumpLinks: link[];
  pageLinks: link[];
};

const Navbar = ({ logo, subTitle, jumpLinks, pageLinks }: NavbarProps) => (
  <div className=" flex max-h-10 w-full flex-row items-center bg-deep-blue lg:container">
    <div className="flex h-12 flex-grow flex-row flex-wrap items-center justify-self-start pl-3">
      <h2 className="flex flex-row pr-2 text-light-blue">
        {logo}
        <span className="ml-2 hidden text-cream md:flex">{subTitle}</span>
      </h2>
    </div>
    <div className="items-center justify-self-end">
      <ul className="flex h-10 flex-row items-center">
        {jumpLinks.map((link) => {
          return (
            <li
              key={link.displayText}
              className="duration-500 motion-safe:hover:scale-105"
            >
              <a
                href={link.anchor}
                className={`smooth mx-2 self-center rounded-full py-2 duration-500 hover:bg-light-blue lg:mx-6 lg:px-4`}
              >
                <span>{link.displayText}</span>
              </a>
            </li>
          );
        })}
        {pageLinks.map((link) => {
          return (
            <li
              key={link.displayText}
              className="duration-500 motion-safe:hover:scale-105"
            >
              <Link
                href={link.anchor}
                className={`smooth mx-2 self-center rounded-full py-2 duration-500 hover:bg-light-blue lg:mx-6 lg:px-4`}
              >
                <span>{link.displayText}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default Navbar;
