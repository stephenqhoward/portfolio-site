import { type FC } from "react";
import Image from 'next/image';
import { PortfolioItemImage } from './PortfolioItemImage';

export type imgs = {
  src: string;
  alt: string;
  width: number;
  height?: number;
};

export type Buttons = {
  url?: string;
  type: string;
  text: string;
  subtext?: string;
}

export type PortfolioItemProps = {
  title: string;
  description: string;
  technologies: Array<imgs>;
  url?: string;
  buttons: Array<Buttons>;
  img?: imgs;
  imgPosition?: string;
};

const PortfolioItem: FC<PortfolioItemProps> = ({ title, description, technologies, url, buttons, img, imgPosition }) => {

  return (
    <div className="flex sm:flex-col md:flex-row flex-wrap sm:w-full md:w-[90%] min-h-[45vh] space-y-6">

    { img && imgPosition === "left" ? <PortfolioItemImage
      img={ img }
      url={ url }
      position={ imgPosition }
    ></PortfolioItemImage> : <></>
    }

    <div className="sm:w-[100%] md:w-[60%] flex flex-col space-y-6 self-center">
      <h3 className="text-deep-blue text-2xl font-bold">{ title }</h3>
      <ul className="flex flex-row space-x-6 items-center sm:space-y-4 md:space-y-0">
        {technologies.map((img, index) => {
          return (
            <li key={ index }>
              <Image src={ img.src } alt={ img.alt } width={ img.width }>
              </Image>
            </li>
          )
        })}
      </ul>
      <p className="text-deep-blue">{ description }</p>
      <div className="flex flex-row space-x-8">
        {/* Buttons */}
        {buttons.map((button) => {
          if (button.type === 'disabled') {
            return (
              <div key={ button.type } className="w-32 h-16 bg-slate-800 rounded-xl text-cream flex flex-col justify-center text-center">
                <p className="text-lg font-bold">{ button.text }</p>
                <p className="font-thin text-sm">{ button.subtext }</p>
              </div>
            )
          } else if (button.type === 'live') {
            return (
              <a href={ button.url } className="bg-red w-32 rounded-xl h-16 text-lg font-bold" target="_blank" rel="noreferrer" key={ button.type }>
                <button className="w-32 h-16 text-cream">{ button.text }</button>
              </a>
            )
          } else {
            return (
              <div className="w-32 h-16 bg-light-blue rounded-xl text-cream flex justify-center items-center" key={ button.type }>
                <p className="text-lg font-bold text-center">Coming Soon!</p>
              </div>
            )
          }
        })}
      </div>
    </div>

    { img && imgPosition === "right" ? <PortfolioItemImage
      img={ img }
      url={ url }
      position={ imgPosition }
    ></PortfolioItemImage> : <></>
    }
  </div>
  )
};

export default PortfolioItem;
