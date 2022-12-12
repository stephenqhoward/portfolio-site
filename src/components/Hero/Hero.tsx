type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className="my-14 text-center">
    <h1 className="font-bold text-4xl text-deep-blue">{ title } 
      <br />
      <span className="text-2xl text-center text-blue">{ subtitle }</span>
    </h1>
  </div>
);

export default Hero;
