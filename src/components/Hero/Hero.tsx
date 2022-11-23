import { FC } from "react";
// import heroStyles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subTitle?: string;
  leadIn?: string;
  cta: string;
  link: string;
};

const Hero: FC<HeroProps> = ({ title, subTitle, leadIn, cta, link }) => (
  <div className="container color-white px-4">
    {leadIn && <p className="text-gold text-lg font-bold">{leadIn}</p>}
    <h1 className="text-4xl sm:text-5xl font-bold my-5">{title}</h1>
    {subTitle && <p className="text-xl my-0">{subTitle}</p>}
    <a
      href={link}
      className="rounded-md bg-gold font-bold font-mono py-3 px-7 my-5 inline-block tracking-widest"
    >
      {cta}
    </a>
  </div>
);

export default Hero;
