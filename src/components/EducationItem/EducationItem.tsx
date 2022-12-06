import { type FC } from "react";
import Image from 'next/image';

export type imgs = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  url?: string;
};

export type EducationItemProps = {
  institution: string;
  description: string;
  technologies: Array<imgs>;
  url?: string;
  projectTitle: string;
  projectDescription: Array<string>;
  integratedApis: Array<imgs>;
};

const EducationItem: FC<EducationItemProps> = ({ institution, description, technologies, url, projectTitle, projectDescription, integratedApis }) => {

  return (
    <div className="flex flex-col flex-wrap w-full space-y-6 z-10 lg:border-2 border-light-blue rounded-lg lg:p-4 lg:pl-0 pb-6 text-cream">
      <div className="w-full flex flex-col space-y-2 pl-0 lg:pl-4">
        <a href={ url } target="_blank" rel="noreferrer">
          <h3 className="text-2xl font-bold text-deep-blue text-center">{ institution }</h3>
        </a>
        <p className="text-center">{ description }</p>
        <p className="underline self-center">Tech Stack</p>
        <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center sm:space-y-4 md:space-y-0 self-center justify-center portfolio-item-buttons">
          {technologies.map((img) => {
            return (
              <a href={ img.url } key={ img.alt } className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px]`}>
                <li className=''>
                  <Image src={ img.src } alt={ img.alt } width={ img.width } className=''>
                  </Image>
                </li>
              </a>
            )
          })}
        </ul>
      </div>
      <div className="pl-0 lg:pl-4 w-full lg:w-[70%]">
      <h4 className="text-xl font-bold italic">{ projectTitle }</h4>
        <ul>
          {projectDescription.map((bullet, index) => {
            return (                
              <li key={ index } className='mr-4 mb-4'>
                <p className="text-justify lg:text-left">{ bullet }</p>
              </li>
            )
          })}
        </ul>
        <p className="underline text-center pb-4">External APIs Integrated</p>
        <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center sm:space-y-4 md:space-y-0 self-center lg:self-start justify-center portfolio-item-buttons">
          {integratedApis.map((img) => {
            return (
              <a href={ img.url } key={ img.alt } className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px]`}>
                <li className=''>
                  <Image src={ img.src } alt={ img.alt } width={ img.width } className=''>
                  </Image>
                </li>
              </a>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default EducationItem;
