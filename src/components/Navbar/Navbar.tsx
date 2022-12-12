import Link from 'next/link';

type link = {
  displayText: string;
  anchor: string;
}

type NavbarProps = {
  logo?: string;
  subTitle?: string;
  links: link[];
};

const Navbar = ({ logo, subTitle, links }: NavbarProps) => (
  <div className=" bg-deep-blue lg:container flex flex-row items-center max-h-10 w-full">
    <div className="flex flex-row flex-grow flex-wrap h-12 items-center justify-self-start pl-3">
      <h2 className="pr-2 text-light-blue flex flex-row">
        { logo }
        <span className="hidden md:flex text-cream ml-2">{ subTitle }</span>
      </h2>
      
    </div>
    <div className="items-center justify-self-end">
      <ul className="flex flex-row h-full items-center">
        {links.map((link) => {
          return (
            <li key={ link.displayText } className="hover:bg-light-blue h-full rounded-full self-center mx-2 lg:mx-6 py-1 lg:px-4">
              <Link href={ link.anchor }>
                { link.displayText }
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
);

export default Navbar;
