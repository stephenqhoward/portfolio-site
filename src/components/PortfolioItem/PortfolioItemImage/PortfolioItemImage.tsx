import { type FC } from "react";
import Image from 'next/image';

type portfolioitemimage = {
  img: imgs;
  url?: string;
  position?: string;
}

export type imgs = {
  src: string;
  alt: string;
  width: number;
  height?: number;
};

const PortfolioItemImage: FC<portfolioitemimage> = ({ img, url, position }) => {
  let image = <></>
  let imgClassNames = "drop-shadow-[8px_8px_8px_rgba(0,0,0,0.5)] md:skew-y-3 rounded-md"
  let divClassNames = "sm:w-[100%] md:w-[40%] flex items-center justify-end min-h-fit"
  
  if (position === "left") {
    imgClassNames = "drop-shadow-[-8px_8px_8px_rgba(0,0,0,0.5)] md:-skew-y-3 rounded-md"
    divClassNames = "sm:w-[100%] md:w-[40%] flex items-center justify-start min-h-fit"
  }

  if (img) {
    image = <a href={ url } className="rounded-xl text-lg font-bold" target="_blank" rel="noreferrer">
    <Image src={ img.src } alt={ img.alt }width={ img.width } height={ img.height } className={ imgClassNames }></Image>
  </a>
  }

  return (             
    <div className={ divClassNames}>
      { image }
    </div>
  )
};

export default PortfolioItemImage;
