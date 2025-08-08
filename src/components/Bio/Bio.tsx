type BioProps = {
  bullets: string[];
  quotedText: string;
  text: string[];
  skills: string[];
};

const Bio = ({ bullets, quotedText, text, skills }: BioProps) => (
  <>
    <div className="flex w-full flex-col pl-0 md:pl-24">
      <div className="w-full space-y-3 pb-4 md:w-[80%]">
        <h2 className="text-4xl md:text-left">I am ...</h2>
        {/* ... bullet points */}
        <ul className="text-md ml-0 w-full space-y-4 md:ml-5 md:w-[80%]">
          {bullets.map((paragraph, index) => {
            const highlightBullets = [0, 2, 4];
            return (
              <li
                className={`text-justify ${
                  highlightBullets.includes(index)
                    ? "text-cream"
                    : "text-slate-300"
                } md:text-left`}
                key={index}
              >
                {paragraph}
              </li>
            );
          })}
        </ul>
        {/* Paragraphs */}
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
    </div>
    {/* Quoted text */}
    <div className="hidden w-[60%] self-center text-3xl lg:visible lg:flex">
      <div className="w-[70%] rounded-lg border-2 border-black bg-slate-800 px-4 pb-6 pt-4">
        <svg
          aria-hidden="true"
          className="h-10 w-10 text-gray-400 dark:text-gray-500"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <h4 className={`ml-4 text-left italic text-cream`}>{quotedText}</h4>
      </div>
    </div>
  </>
);

export default Bio;
