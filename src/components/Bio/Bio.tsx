type BioProps = {
  text: string[];
  skills: string[];
};

const Bio = ({ text, skills }: BioProps) => (
  <>
    <div className="space-y-3 pb-4 sm:w-full md:w-[60%]">
      <h2 className="text-center text-4xl md:text-left">Stephen Q. Howard</h2>
      {text.map((paragraph, index) => {
        return (
          <p
            className="text-justify text-lg text-cream md:text-left"
            key={index}
          >
            {paragraph}
          </p>
        );
      })}
    </div>
    <div>
      <h3 className="font-bold text-light-blue">Skills</h3>
      <ul className="flex flex-row flex-wrap text-lg text-cream">
        {skills.map((skill, index) => {
          // Add bullet point to each skill except the last one.
          while (index !== skills.length - 1) {
            return <li key={index}>{skill} •&nbsp;</li>;
          }
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  </>
);

export default Bio;
