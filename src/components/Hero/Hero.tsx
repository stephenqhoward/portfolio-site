type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className="my-14 text-center">
    <h1 className="font-bold text-4xl text-deep-blue">{ title }</h1>
      <h2 className="text-2xl text-center">{ subtitle }</h2>
      <br></br>
      <p className="text-red">Please excuse the saw dust as I spin this up!</p>
      <p className="text-deep-blue">Site Version 0.9</p>
      <p className="font-thin text-deep-blue">Last Updated: 12/6/2022</p>
  </div>
);

export default Hero;
