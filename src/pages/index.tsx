import { type NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'
import { Navbar } from "../components/Navbar";

// Images
import LinkedInLogo from '../../public/img/linkedin-app-icon.svg';
import GitHubLogo from '../../public/img/github-icon.svg';
import NextJsLogo from '../../public/img/nextjs-icon.svg';
import ReactLogo from '../../public/img/react-js-icon.svg';
import TypescriptLogo from '../../public/img/typescript-programming-language-icon.svg';
import TailwindLogo from '../../public/img/tailwind-css-icon.svg';
import UrankarLawThumbnail from '../../public/img/Urankar-Law-Thumbnail.png';
import VercelLogo from '../../public/img/vercel.svg';
import TrpcLogo from '../../public/img/trpc-seeklogo.com.svg';
import PrismaLogo from '../../public/img/prisma-2.svg';
import PostgresqlLogo from '../../public/img/postgresql-icon.svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stephen Q Howard</title>
        <meta name="description" content="Portfolio site of Stephen Q. Howard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-[#15222c] to-[#022b6d]">
        
        <Navbar logo="SQH" subTitle="Portfolio Site" links={[{displayText: 'About', anchor: '#about'}, {displayText: 'Portfolio', anchor: '#portfolio'}, {displayText: 'Social', anchor: '#social'}, {displayText: 'Resume', anchor: '#resume'} ]}></Navbar>

        <div className="container flex flex-col items-center justify-center">
          
          <section className="flex flex-col min-h-[80vh] min-w-full bg-cream color-light-blue items-center justify-center">
            <h1 className="text-deep-blue font-bold">Welcome to Stephen Q Howard&apos;s portfolio site.</h1>
            <p className="text-red">Please excuse the saw dust as I spin this up!</p>
          </section>
          
          <section className="container min-h-[40vh] flex flex-row flex-wrap bg-blue py-6" id="about">
            <div className="mr-36 px-10 pb-4">
              <h2 className="">About Me</h2>
              <ul className="">
                <li className="pt-3">I am a recent graduate of a 28-week coding boot camp, while working full time. I am no stranger to a demanding work environment, getting my start out of college in a Big Four public accounting firm.</li>
                <li className="pt-3">I have a history of researching and implementing technical solutions to business problems.</li>
                <li className="pt-3">You will find I am self-motivated, highly adaptable, and one who pays close attention to the details.</li>
                <li className="pt-3">I am looking for experience that will provide awareness for what I don&apos;t know, an understanding of the necessary structure for high performing software development teams, and the core technical competency to prototype my startup ideas.</li>
              </ul>
            </div>
            <div className="px-10">
              <h2>Skills</h2>
              <p>JavaScript - Python - ReactJs - Django - PostgreSQL - Typescript - Tailwind - HTML - CSS - Git - GitHub - Slack</p>
            </div>
          </section>

          <section className="container min-h-[80vh] bg-cream px-10 py-6" id="portfolio">
            <h2 className="text-4xl mb-6">PORTFOLIO</h2>
            <div className="flex flex-row sm:flex-wrap">
              <div className="flex flex-col flex-grow flex-wrap">
                <div className="self-end">
                  <h3 className="text-deep-blue text-lg font-bold">Urankar Law, LLC - Landing Page</h3>
                  <div className="w-[80%] flex flex-col">
                    <ul className="text-deep-blue my-4">
                      <li className="flex flex-row flex-wrap">
                        <Image src={ NextJsLogo } alt="Next.js" width={125} className="mr-8"></Image>
                        <Image src={ ReactLogo } alt="React.js" width={60} className="mr-8"></Image>
                        <Image src={ TypescriptLogo } alt="Typescript" width={60} className="mr-8"></Image>
                        <Image src={ TailwindLogo } alt="Tailwind CSS" width={60} className="mr-8"></Image>
                        <Image src={ VercelLogo } alt="Vercel" width={150} className="px-auto"></Image>
                      </li>
                      <li className="text-deep-blue mt-5">Description: Referencing the client&apos;s theme, built and styled the landing page layout and components.</li>
                    </ul>
                  </div>
                  <div className="mt-10 flex flex-row">
                    <a href="http://urankarlaw.com" className="bg-red w-32 rounded-xl h-16 text-lg font-bold" target="_blank" rel="noreferrer"><button className="w-32 h-16 text-cream">Live Site</button></a>
                    <div className="w-32 h-16 bg-slate-800 rounded-xl ml-8 text-cream text-center"><p className="text-lg font-bold">GitHub</p><p className="font-thin text-sm">(Private Repo)</p></div>
                  </div>
                </div>
              </div>
              <div className="flex w-[25vw] items-center">
                <a href="http://urankarlaw.com" className="rounded-xl text-lg font-bold" target="_blank" rel="noreferrer">
                  <Image src={ UrankarLawThumbnail } alt="Urankar Law - Thumbnail" width={400} className="drop-shadow-[8px_8px_8px_rgba(0,0,0,0.5)] skew-y-3 px-auto rounded-md"></Image>
                </a>
              </div>
            </div>
            <div className="min-h-[40vh] flex flex-row my-16">
              <div className="flex flex-col justify-center w-[25vw]">
                <Image src={ UrankarLawThumbnail } alt="Urankar Law - Thumbnail" width={400} className="drop-shadow-[-8px_8px_8px_rgba(0,0,0,0.5)] -skew-y-3 px-auto rounded-md"></Image>
              </div>
              <div className="w-[50%] flex flex-col items-end">
                <div className="w-[30vw] flex flex-col items-end">
                  <h3 className="text-deep-blue text-lg font-bold">Discing Up - Full Stack Web Application</h3>
                  <ul className="text-deep-blue flex flex-col">
                    <li className="flex flex-row flex-wrap my-4 justify-end space-x-8">
                      <Image src={ NextJsLogo } alt="Next.js" width={125} className=""></Image>
                      <Image src={ ReactLogo } alt="React.js" width={60} className=""></Image>
                      <Image src={ TypescriptLogo } alt="Typescript" width={50} className=""></Image>
                      <Image src={ TrpcLogo } alt="tRPC" width={40} className=""></Image>
                      <Image src={ PrismaLogo } alt="Prisma" width={100} className=""></Image>
                      <Image src={ PostgresqlLogo } alt="PostgreSQL" width={55} className=""></Image>
                      <Image src={ TailwindLogo } alt="Tailwind CSS" width={60} className=""></Image>
                      <Image src={ VercelLogo } alt="Vercel" width={150} className="px-auto"></Image>
                    </li>
                    <li className="text-deep-blue">Description: Web application for monitoring weather and reporting course conditions for disc golf courses in central Ohio.</li>
                  </ul>
                  <div className="flex flex-row mt-10">
                    {/* <a href="#discing-up" className="bg-red w-32 rounded-xl h-16 text-lg font-bold" target="_blank" rel="noreferrer">
                      <button className="w-32 h-16 text-cream">Live Site</button>
                    </a> */}
                    <div className="w-32 h-16 bg-light-blue rounded-xl text-cream text-center">
                      <p className="text-lg font-bold text-center">Coming Soon!</p>
                    </div>
                    <div className="w-32 h-16 bg-slate-800 rounded-xl ml-8 text-cream text-center">
                      <p className="text-lg font-bold">GitHub</p>
                      <p className="font-thin text-sm">(Private Repo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container min-h-[20vh] bg-deep-blue" id="social">
            <div>
              <ul className="flex flex-row justify-center items-center min-h-[50px] my-8">
                <a href='https://www.linkedin.com/in/stephenqhoward/' className="mr-12 flex items-center bg-light-blue rounded-full">
                  <li className="flex h-[90px] w-[90px] place-self-center">
                    <Image alt="LinkedIn" src={ LinkedInLogo } width={45} className="m-auto self-center"></Image>
                  </li>
                </a>
                <a href='https://github.com/stephenqhoward' className="bg-light-blue mr-12 rounded-full">
                {/* filter: invert(91%) sepia(20%) saturate(428%) hue-rotate(131deg) brightness(91%) contrast(88%) */}
                  <li className="flex text-center justify-items-center h-[90px] w-[90px]">
                    <Image alt="GitHub" src={ GitHubLogo } width={80} className="mx-auto self-center h-[50px] w-[50px]"></Image>
                  </li>
                </a>
                <a href='#resume' className="bg-light-blue rounded-full">
                  <li className="flex h-[90px] w-[90px]">
                    <p className="self-center mx-auto font-bold">Resume
                    </p>
                  </li>
                </a>
              </ul>
            </div>
            <div className="flex justify-center">
              <p className="text-color-cream font-thin">&copy; 2022 - Stephen Howard</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
