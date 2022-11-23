import { FC } from "react";

type AboutProps = {
  title: string;
  tagline?: string;
  experience: string[];
  education: string[];
};

const About: FC<AboutProps> = ({ title, tagline, experience, education }) => (
  <div
    className="container flex flex-wrap flex-col lg:justify-center h-auto py-14 px-4"
    id="about"
  >
    <div className="max-w-md sm:my-5 lg:my-0">
      <h2 className="text-sm m-0 py-3 text-gold">{title}</h2>
      <h3 className="text-3xl mt-2 text-black font-bold">{tagline}</h3>
      <div className="bg-cover mx-0 border-gold w-24 h-1 border-t-2 my-3 text-black"></div>
    </div>
    <div className="flex flex-col md:flex-row">
      <ul className="md:mr-4 w-full">
        {experience.map((listItem, index) => {
          return (
            <li className="text-black ml-0  m-5" key={index}>
              {listItem}
            </li>
          );
        })}
      </ul>
      <ul className="md:ml-4 w-full">
        {education.map((listItem, index) => {
          return (
            <li className="text-black ml-0  m-5" key={index}>
              {listItem}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default About;
