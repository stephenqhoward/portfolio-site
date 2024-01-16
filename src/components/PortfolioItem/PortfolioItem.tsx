import { PortfolioItemImage } from "./PortfolioItemImage";
import { Technologies } from "../Technologies";

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
    <div className="z-10 flex w-full flex-col flex-wrap space-y-4 rounded-lg border-2 border-deep-blue bg-slate-400 p-4 pb-6 xl:flex-row">
      {img && imgPosition === "left" && (
        <PortfolioItemImage img={img} url={url} position={imgPosition} />
      )}

      <div className="flex flex-col space-y-6 self-center sm:w-[100%] lg:w-[80%] xl:w-[60%]">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="text-center text-3xl font-bold text-deep-blue xl:text-left">
            {title}
          </h3>
        </a>
        <Technologies technologies={technologies} />
        <p className="self-center text-justify text-lg text-deep-blue sm:w-full md:w-[60%] md:text-center lg:w-[80%] lg:text-left xl:w-full xl:self-start">
          {description}
        </p>
        <div
          className={`flex w-full flex-row flex-wrap justify-around self-center md:w-[80%] md:space-x-12 xl:justify-start xl:self-start`}
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
            } else if (button.type === "unavailable") {
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
            } else if (button.type === "details") {
              return (
                <a
                  href={button.url}
                  className="mt-6 h-16 w-32 rounded-xl bg-deep-blue text-lg font-bold duration-500 hover:bg-light-blue motion-safe:hover:scale-110 sm:mt-0"
                  rel="noreferrer"
                  key={button.type}
                >
                  <button className="h-16 w-32 text-white">
                    {button.text}
                  </button>
                </a>
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
