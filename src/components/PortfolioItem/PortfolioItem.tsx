import { type FC } from "react";
import Image from 'next/image';
import { PortfolioItemImage } from './PortfolioItemImage';

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
    <div className="flex sm:flex-col lg:flex-row flex-wrap w-full space-y-6 z-10 border-2 rounded-lg border-blue p-4 pb-6">

    { img && imgPosition === "left" ? <PortfolioItemImage
      img={ img }
      url={ url }
      position={ imgPosition }
    ></PortfolioItemImage> : <></>
    }

    <div className="sm:w-[100%] lg:w-[60%] flex flex-col space-y-6 self-center">
      <h3 className="text-deep-blue text-2xl font-bold text-center lg:text-left">{ title }</h3>
      <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center sm:space-y-4 md:space-y-0 justify-center lg:justify-start">
        {technologies.map((img, index) => {
          return (
            <a href={ img.url } key={ index } target="_blank" rel="noreferrer" className={`max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] mx-auto lg:ml-0 lg:mr-4 my-auto`}>
              <li className=''>
                <Image src={ img.src } alt={ img.alt } height={ img.height } width={ img.width } className=''>
                </Image>
              </li>
            </a>
          )
        })}
      </ul>
      <p className="text-deep-blue">{ description }</p>
      <div className="flex flex-row space-x-11 justify-center lg:justify-start lg:space-x-8">
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
              <a href={ button.url } className="bg-red hover:bg-light-red w-32 rounded-xl h-16 text-lg font-bold" target="_blank" rel="noreferrer" key={ button.type }>
                <button className="w-32 h-16 text-cream">{ button.text }</button>
              </a>
            )
          } else {
            return (
              <div className="w-32 h-16 bg-light-blue rounded-xl flex justify-center items-center" key={ button.type }>
                <p className="text-lg font-bold text-center text-deep-blue">Coming Soon!</p>
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
