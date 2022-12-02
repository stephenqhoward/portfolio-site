import { type FC } from "react";
import Image from 'next/image';

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

export type EducationProps = {
  title: string;
  description: string;
  technologies: Array<imgs>;
  url?: string;
  buttons: Array<Buttons>;
  img?: imgs;
  imgPosition?: string;
};

const Education: FC<EducationProps> = ({ title, description, technologies, url, buttons, img, imgPosition }) => {

  return (
    <div className="flex sm:flex-col lg:flex-row flex-wrap w-full space-y-6 z-10 border-2 rounded-lg border-blue p-4 pb-6">

    <div className="sm:w-[100%] lg:w-[60%] flex flex-col space-y-6 self-center">
      <h3 className="text-deep-blue text-2xl font-bold">{ title }</h3>
      <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center sm:space-y-4 md:space-y-0 underline decoration-4">
        {technologies.map((img, index) => {
          return (
            <a href={ img.url } key={ index } className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] sm:ml-6 sm:mr-0 md:ml-0 md:mr-4 sm:mb-6 md:mb-0 underline decoration-4`}>
              <li className='mr-4 mb-4'>
                <Image src={ img.src } alt={ img.alt } width={ img.width } className=''>
                </Image>
              </li>
            </a>
          )
        })}
      </ul>
      <p className="text-deep-blue">{ description }</p>
      
    </div>

  </div>
  )
};

export default Education;
