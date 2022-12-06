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
      <h2 className="pr-2 text-light-blue">{ logo }</h2>
      <h3 className="hidden md:flex">{ subTitle }</h3>
    </div>
    <div className="items-center justify-self-end">
      <ul className="flex flex-row h-full items-center">
        {links.map((link) => {
          return (
            <Link key={ link.displayText } href={ link.anchor } className="hover:bg-light-blue h-full px-2 lg:px-6 rounded-full self-center"><li>{ link.displayText }</li></Link>
          )
        })}
      </ul>
    </div>
  </div>
);

export default Navbar;
