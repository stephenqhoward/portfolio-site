import Image from "next/image";

export type imgs = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  url?: string;
};

const Technologies = ({ technologies }: { technologies: imgs[] }) => {
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center sm:space-y-3 xl:flex-nowrap xl:justify-start xl:space-y-0">
      {technologies.map((img, index) => {
        return (
          <li
            key={index}
            className={`max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] mx-auto my-auto min-h-full duration-500 motion-safe:hover:scale-110 lg:ml-0 lg:mr-4`}
          >
            <a
              href={img.url}
              target="_blank"
              rel="noreferrer"
              className="h-full w-full"
            >
              <Image
                src={img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Technologies;
