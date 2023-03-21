import Image from "next/image";
import { type imgs } from "../PortfolioItem/PortfolioItem";
import styles from "./EducationItem.module.css";

export type EducationItemProps = {
  children?: React.ReactNode;
  institution: string;
  description: string;
  technologies?: Array<imgs>;
  honors?: string;
  url?: string;
  projectTitle?: string;
  projectDescription?: Array<string>;
  integratedApis?: Array<imgs>;
};

const EducationItem = ({
  institution,
  description,
  honors,
  technologies,
  url,
  projectTitle,
  projectDescription,
  integratedApis,
}: EducationItemProps) => {
  return (
    <div className="flex w-full flex-col flex-wrap space-y-6 self-center rounded-lg border-light-blue bg-slate-800 p-4 pb-6 text-lg text-cream lg:w-[60%] lg:border-2 lg:pl-0">
      <div className="flex w-full flex-col space-y-2 px-1 lg:px-4">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="mb-4 text-2xl font-bold text-cream md:text-2xl">
            {institution}
          </h3>
        </a>
        <p className="text-sm md:text-base">{description}</p>
        {honors && <p className="text-sm md:text-base">Honors: {honors}</p>}
        {technologies && (
          <>
            <p className="text-center underline">Tech Stack</p>
            <ul
              className={`flex w-full flex-row flex-wrap items-center justify-center self-center sm:space-y-4 md:space-y-0 lg:w-[70%] lg:flex-nowrap ${styles["technologies-item-buttons"]}`}
            >
              {technologies?.map((img) => {
                return (
                  <li
                    key={img.alt}
                    className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] duration-500 motion-safe:hover:scale-110`}
                  >
                    <a href={img.url}>
                      <Image src={img.src} alt={img.alt} width={img.width} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
      {projectTitle && (
        <div className="w-full px-2 lg:px-4">
          <h4 className="text-lg font-bold italic text-cream">
            {projectTitle}
          </h4>
          <ul className="mb-6">
            {projectDescription?.map((bullet, index) => {
              return (
                <li key={index} className="mx-auto mb-2 lg:mr-4">
                  <p className="text-justify text-base lg:text-left">
                    {bullet}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="pb-4 text-center underline">External APIs Integrated</p>
          <ul
            className={`mx-auto flex w-full flex-row items-center md:w-[70%] ${styles["technologies-item-buttons"]} spae-y-4 md:space-y-0 lg:flex-nowrap`}
          >
            {integratedApis?.map((img) => {
              return (
                <li
                  key={img.alt}
                  className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] duration-500 motion-safe:hover:scale-110`}
                >
                  <a href={img.url}>
                    <Image src={img.src} alt={img.alt} width={img.width} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationItem;
