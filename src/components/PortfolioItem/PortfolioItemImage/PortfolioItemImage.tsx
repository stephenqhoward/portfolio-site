import { type imgs } from "../PortfolioItem";
import Image from "next/image";

type portfolioItemImageProps = {
  img: imgs;
  url?: string;
  position?: string;
};

const PortfolioItemImage = ({
  img,
  url,
  position,
}: portfolioItemImageProps) => {
  let image = null;
  let imgClassNames =
    "lg:drop-shadow-[8px_8px_8px_rgba(0,0,0,0.5)] rounded-md xl:skew-y-2";
  let divClassNames =
    "flex items-center sm:justify-center xl:justify-end xl:pr-4 sm:w-[100%] xl:w-[40%]";

  if (position === "left") {
    imgClassNames =
      // Invert the skew and drop-shadow directions
      "lg:drop-shadow-[-8px_8px_8px_rgba(0,0,0,0.5)] rounded-md xl:-skew-y-2";
    divClassNames =
      "flex items-center sm:justify-center xl:justify-start xl:pl-4 sm:w-[100%] xl:w-[40%]";
  }

  if (img) {
    image = (
      <a
        href={url}
        className="rounded-xl text-lg font-bold duration-500 motion-safe:hover:scale-105"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height="0"
          className={imgClassNames}
        />
      </a>
    );
  }

  return <div className={divClassNames}>{image}</div>;
};

export default PortfolioItemImage;
