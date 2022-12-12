type BioProps = {
  text: string[];
  skills: string[];
};

const Bio = ({ text, skills }: BioProps) => (
  <>
    <div className="pb-4 space-y-3 sm:w-full md:w-[60%]">
      <h2 className="text-4xl text-center md:text-left">Stephen Q. Howard</h2>
      {text.map((paragraph, index) => {
        return (
          <p className="text-justify md:text-left" key={ index }>{ paragraph }</p>
        )
      })}
    </div>
    <div>
      <h3 className='text-light-blue font-bold'>Skills</h3>
      <ul className="flex flex-row flex-wrap">
        {skills.map((skill, index) => {
          // Add bullet point to each skill except the last one.
          while(index !== skills.length-1) {
            return (
              <li key={ index }>{ skill } •&nbsp;</li>
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
