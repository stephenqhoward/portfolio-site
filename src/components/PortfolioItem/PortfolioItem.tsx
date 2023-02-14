import Image from "next/image";
import { PortfolioItemImage } from "./PortfolioItemImage";
import styles from "./PortfolioItem.module.css";

export type imgs = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  url?: string;
};

export type Buttons = {
  url?: string;
  type: string;
  text: string;
  subtext?: string;
};

export type PortfolioItemProps = {
  title: string;
  description: string;
  technologies: Array<imgs>;
  url?: string;
  buttons: Array<Buttons>;
  img?: imgs;
  imgPosition?: string;
};

const PortfolioItem = ({
  title,
  description,
  technologies,
  url,
  buttons,
  img,
  imgPosition,
}: PortfolioItemProps) => {
  return (
    <div className="z-10 flex w-full flex-wrap space-y-4 rounded-lg border-2 border-blue p-4 pb-6 sm:flex-col lg:flex-row">
      {img && imgPosition === "left" && (
        <PortfolioItemImage img={img} url={url} position={imgPosition} />
      )}

      <div className="flex flex-col space-y-6 self-center sm:w-[100%] lg:w-[60%]">
        <h3 className="text-center text-2xl font-bold text-deep-blue lg:text-left">
          {title}
        </h3>
        <ul className="flex flex-row flex-wrap items-center justify-center sm:space-y-4 md:space-y-0 lg:flex-nowrap lg:justify-start">
          {technologies.map((img, index) => {
            return (
              <li
                key={index}
                className={`max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] mx-auto my-auto min-h-full duration-500 motion-safe:hover:scale-110 lg:ml-0 lg:mr-4`}
              >
                <a
                  href={img.url}
                  target="_blank"
                  rel="noreferrer"
                  className="h-full w-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    height={img.height}
                    width={img.width}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="self-center text-justify text-lg text-deep-blue sm:w-full md:w-[60%] md:text-center lg:w-full lg:self-start lg:text-left">
          {description}
        </p>
        <div
          className={`flex flex-row justify-center md:space-x-12 md:self-center lg:justify-start lg:self-start ${styles["technologies-item-buttons"]} md:w-[50%]`}
        >
          {/* Buttons */}
          {buttons.map((button) => {
            if (button.type === "disabled") {
              return (
                <div
                  key={button.type}
                  className="flex h-16 w-32 flex-col justify-center rounded-xl bg-slate-800 text-center text-cream"
                >
                  <p className="text-lg font-bold">{button.text}</p>
                  <p className="text-sm font-thin">{button.subtext}</p>
                </div>
              );
            } else if (button.type === "live") {
              return (
                <a
                  href={button.url}
                  className="h-16 w-32 rounded-xl bg-red text-lg font-bold duration-500 hover:bg-light-red motion-safe:hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  key={button.type}
                >
                  <button className="h-16 w-32 text-white">
                    {button.text}
                  </button>
                </a>
              );
            } else {
              return (
                <div
                  className="flex h-16 w-32 items-center justify-center rounded-xl bg-light-blue"
                  key={button.type}
                >
                  <p className="text-center text-lg font-bold text-deep-blue">
                    Coming Soon!
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>

      {img && imgPosition === "right" && (
        <PortfolioItemImage img={img} url={url} position={imgPosition} />
      )}
    </div>
  );
};

export default PortfolioItem;
