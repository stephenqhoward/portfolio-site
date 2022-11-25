import { type FC } from "react";

export type Category = {
  img: string;
  category: string;
};

type PortfolioItemProps = {
  description?: string;
  title: string;
  categories: Array<Category>;
};

const PortfolioItem: FC<PortfolioItemProps> = ({ title, description, categories }) => (
  <div className="flex flex-col px-4 color-white py-16 w-full h-auto container">
    <div className="sm:my-5">
      <p className="text-4xl m-0">{title}</p>
      <div className="bg-cover mx-0 border-gold w-24 h-1 border-t-2 my-3"></div>
      {description && <p className="leading-normal my-0">{description}</p>}
    </div>
    <ul className="grid auto-cols-fr gap-4 md:grid-flow-col md:grid-rows-5">
      {categories.map((category, index) => {
        return (
          <li
            className="bg-white bg-opacity-10 flex items-center hover:bg-dark-slate"
            key={`${category.img}-${index}`}
          >
            <i
              className={`m-3 inline-block text-2xl box-border text-gold ${category.img}`}
            ></i>
            <p className="truncate text-base">{category.category}</p>
          </li>
        );
      })}
    </ul>
  </div>
);

export default PortfolioItem;
