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
    <div className="z-10 flex w-full flex-col flex-wrap space-y-6 rounded-lg border-light-blue pb-6 text-lg text-cream lg:border-2 lg:p-4 lg:pl-0">
      <div className="flex w-full flex-col space-y-2 pl-0 lg:pl-4">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="text-2xl font-bold text-cream">{institution}</h3>
        </a>
        <p>{description}</p>
        {honors && <p>Honors: {honors}</p>}
        {technologies && (
          <>
            <p className="underline">Tech Stack</p>
            <ul
              className={`flex w-[75%] flex-row flex-wrap items-center justify-center self-center sm:space-y-4 md:space-y-0 lg:w-[33%] lg:flex-nowrap lg:self-start ${styles["technologies-item-buttons"]}`}
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
        <div className="w-full pl-0 lg:pl-4 xl:w-[54%]">
          <h4 className="text-xl font-bold italic text-cream">
            {projectTitle}
          </h4>
          <ul>
            {projectDescription?.map((bullet, index) => {
              return (
                <li key={index} className="mx-auto mb-4 lg:mr-4">
                  <p className="text-justify lg:text-left">{bullet}</p>
                </li>
              );
            })}
          </ul>
          <p className="pb-4 underline">External APIs Integrated</p>
          <ul
            className={`flex flex-row flex-wrap items-center justify-center self-center sm:space-y-4 md:space-y-0 lg:flex-nowrap lg:self-start ${styles["technologies-item-buttons"]}`}
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
