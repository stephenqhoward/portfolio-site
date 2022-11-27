// Next
import { type NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'

// Custom Components
import { Navbar } from "../components/Navbar";
import { PortfolioItem } from '../components/PortfolioItem';

// Images
import LinkedInLogo from '../../public/img/linkedin-app-icon.svg';
import GitHubLogo from '../../public/img/github-icon.svg';
import NextJsLogo from '../../public/img/nextjs-icon.svg';
import ReactLogo from '../../public/img/react-js-icon.svg';
import TypescriptLogo from '../../public/img/typescript-programming-language-icon.svg';
import TailwindLogo from '../../public/img/tailwind-css-icon.svg';
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

          <section className="container bg-cream px-10 pt-6 pb-12 flex flex-col items-center space-y-4" id="portfolio">
            <h2 className="text-4xl self-start">PORTFOLIO</h2>
            <PortfolioItem 
              title="Urankar Law, LLC - Landing Page"
              description="Referencing the client&apos;s theme, built and styled the landing page layout and components."
              technologies= {[
                {src: NextJsLogo, alt: 'Next.js', width: 175}, 
                {src: ReactLogo, alt: 'React.js', width: 50}, 
                {src: TypescriptLogo, alt: 'Typescript', width: 45}, {src: TailwindLogo, alt: 'Tailwind CSS', width: 60}, {src: VercelLogo, alt: 'Vercel', width: 175}
              ]}
              url="http://urankarlaw.com"
              buttons={[
                {url: 'http://urankarlaw.com', type: 'live', text: 'Live Site'}, 
                {type: 'disabled', text: 'GitHub', subtext:'(Private Repo)'}
              ]}
              img={
                {
                  src: '/Urankar-Law-Thumbnail.png',
                  // src: '/../public/img/Urankar-Law-Thumbnail.png',
                  alt: 'Urankar Law, LLC',
                  width: 350,
                  height: 400,
                }
              }
              imgPosition="right"
            ></PortfolioItem>
            <PortfolioItem 
              title="Discing Up - Full Stack Web Application"
              description="Web application for monitoring weather and reporting course conditions for disc golf courses in central Ohio."
              technologies= {[
                {src: NextJsLogo, alt: 'Next.js', width: 175}, 
                {src: ReactLogo, alt: 'React.js', width: 50}, 
                {src: TypescriptLogo, alt: 'Typescript', width: 45},  {src: TrpcLogo, alt: 'tRPC', width: 40},
                {src: PrismaLogo, alt: 'Prisma', width: 125},
                {src: PostgresqlLogo, alt: 'PostgreSQL', width: 55},
                {src: TailwindLogo, alt: 'Tailwind CSS', width: 60},
                {src: VercelLogo, alt: 'Vercel', width: 175},
              ]}
              url="http://urankarlaw.com"
              buttons={[
                {url: 'http://urankarlaw.com', type: 'site', text: 'Live Site'}, 
                {type: 'disabled', text: 'GitHub', subtext:'(Private Repo)'}
              ]}
              img={
                {
                  src: '/../public/img/discing-up-thumbnail.png',
                  alt: 'Urankar Law, LLC',
                  width: 350,
                  height: 400,
                }
              }
              imgPosition="left"
            ></PortfolioItem>
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
