import { type FC } from "react";

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero: FC<HeroProps> = ({ title, subtitle }) => (
  <>
    <h1 className="text-deep-blue font-bold text-4xl">{ title }</h1>
      <h2 className="text-2xl text-center">{ subtitle }</h2>
        <p className="text-red">Please excuse the saw dust as I spin this up!</p>
        <p className="text-deep-blue">Site Version 0.7.5</p>
        <p className="text-deep-blue font-thin">Last Updated: 11/28/2022</p>
  </>
);

export default Hero;
