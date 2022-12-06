import { type imgs } from '../PortfolioItem';
import Image from 'next/image';

type portfolioItemImageProps = {
  img: imgs;
  url?: string;
  position?: string;
}

const PortfolioItemImage = ({ img, url, position }: portfolioItemImageProps) => {
  let image = <></>
  let imgClassNames = "lg:drop-shadow-[8px_8px_8px_rgba(0,0,0,0.5)] rounded-md lg:skew-y-3"
  let divClassNames = "flex items-center sm:justify-center lg:justify-end lg:pr-4 sm:w-[100%] lg:w-[40%]"
  
  if (position === "left") {
    imgClassNames = "lg:drop-shadow-[-8px_8px_8px_rgba(0,0,0,0.5)] rounded-md lg:-skew-y-3"
    divClassNames = "flex items-center sm:justify-center lg:justify-start lg:pl-4 sm:w-[100%] lg:w-[40%]"
  }

  if (img) {
    image = <a href={ url } className="font-bold rounded-xl text-lg" target="_blank" rel="noreferrer">
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
