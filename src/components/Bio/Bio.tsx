import { type FC } from "react";
import Link from 'next/link';

type BioProps = {
  text: string[];
  skills: string[];
};

const Bio: FC<BioProps> = ({ text, skills }) => (
  <>
    <div className="pb-4 space-y-3 sm:w-full md:w-[60%]">
      <h2 className="text-4xl">Stephen Q. Howard</h2>
      {text.map((paragraph, index) => {
        return (
            <p className="sm:ml-0 md:ml-16" key={ index }>{ paragraph }</p>
        )
      })}
    </div>
    <div className="sm:ml-0 md:ml-16">
      <h2>Skills</h2>
      <ul className="flex flex-row flex-wrap">
        {skills.map((skill, index) => {
          while(index !== skills.length-1) {
            return (
              <li key={ index }>{ skill } &#x2022;&#x3;</li>
            )
          }
          return (
            <li key={ index }>{ skill }</li>
          )
        })}
      </ul>
    </div>
  </>
);

export default Bio;
