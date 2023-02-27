type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className="my-14 text-center">
    <h1 className="text-4xl font-bold text-deep-blue">
      {title}
      <br />
      <span className="text-center text-2xl text-blue">{subtitle}</span>
    </h1>
  </div>
);

export default Hero;
