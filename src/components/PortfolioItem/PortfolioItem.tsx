import Image from 'next/image';
import { PortfolioItemImage } from './PortfolioItemImage';
import styles from './PortfolioItem.module.css';

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

const PortfolioItem = ({ title, description, technologies, url, buttons, img, imgPosition }: PortfolioItemProps) => {

  return (
    <div className="border-2 border-blue flex sm:flex-col lg:flex-row flex-wrap p-4 pb-6 rounded-lg space-y-4 w-full z-10">

    { (img && imgPosition === "left") && <PortfolioItemImage
      img={ img }
      url={ url }
      position={ imgPosition }
      />
    }

    <div className="sm:w-[100%] lg:w-[60%] flex flex-col space-y-6 self-center">
      <h3 className="text-2xl font-bold text-center text-deep-blue lg:text-left">{ title }</h3>
      <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start sm:space-y-4 md:space-y-0">
        {technologies.map((img, index) => {
          return (
            <li key={ index } className={`max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] mx-auto lg:ml-0 lg:mr-4 my-auto min-h-full duration-500 motion-safe:hover:scale-110`}>
              <a href={ img.url } target="_blank" rel="noreferrer" className="w-full h-full">
                <Image src={ img.src } alt={ img.alt } height={ img.height } width={ img.width } />
              </a>
            </li>
          )
        })}
      </ul>
        <p className="self-center lg:self-start text-deep-blue text-lg text-justify md:text-center lg:text-left sm:w-full md:w-[60%] lg:w-full">{ description }</p>
      <div className={`flex flex-row justify-center lg:justify-start md:self-center lg:self-start md:space-x-12 ${styles["technologies-item-buttons"]} md:w-[50%]`}>
        {/* Buttons */}
        {buttons.map((button) => {
          if (button.type === 'disabled') {
            return (
              <div key={ button.type } className="bg-slate-800 flex flex-col h-16 justify-center rounded-xl text-center text-cream w-32">
                <p className="font-bold text-lg">{ button.text }</p>
                <p className="font-thin text-sm">{ button.subtext }</p>
              </div>
            )
          } else if (button.type === 'live') {
            return (
              <a href={ button.url } className="bg-red hover:bg-light-red font-bold h-16 rounded-xl text-lg w-32 shadow-xl duration-500 motion-safe:hover:scale-110" target="_blank" rel="noreferrer" key={ button.type }>
                <button className="h-16 text-white w-32">{ button.text }</button>
              </a>
            )
          } else {
            return (
              <div className="bg-light-blue flex h-16 items-center justify-center rounded-xl w-32" key={ button.type }>
                <p className="font-bold text-center text-deep-blue text-lg">Coming Soon!</p>
              </div>
            )
          }
        })}
      </div>
    </div>

    { (img && imgPosition === "right") && <PortfolioItemImage
      img={ img }
      url={ url }
      position={ imgPosition }
      />
    }
  </div>
  )
};

export default PortfolioItem;
