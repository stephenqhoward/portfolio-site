import { type NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'
import { Navbar } from "../components/Navbar";
import GitHubLogo from '../../public/GitHub_Logo_White.png';
import LinkedInLogo from '../../public/In-White-26.png';

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
          
          <section className="min-h-screen min-w-full bg-cream color-light-blue">
            <h1 className="">Welcome to Stephen Q Howard&apos;s portfolio site.</h1>
            <p className="">Please excuse the saw dust as I spin this up!</p>
          </section>
          
          <section className="container min-h-[40vh] flex flex-row flex-wrap bg-blue" id="about">
            <div className="mr-36 px-10">
              <h2>About Me</h2>
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

          <section className="container min-h-[80vh] bg-cream" id="portfolio">
            <h2 className="">Portfolio</h2>
            <div>
              <h3>Urankar Law, LLC</h3>
            </div>
            <div>
              <h3>Discing Up</h3>
            </div>
          </section>

          <section className="container min-h-[20vh] bg-deep-blue" id="social">
            <ul className="flex flex-row justify-center items-center min-h-[50px] my-8">
              <a href='https://www.linkedin.com/in/stephenqhoward/' className="mr-12 flex items-center bg-light-blue rounded-full">
                <li className="flex h-[90px] w-[90px] place-self-center">
                  <Image alt="LinkedIn" src={ LinkedInLogo } width={45} className="m-auto self-center"></Image>
                </li>
              </a>
              <a href='https://github.com/stephenqhoward' className="bg-light-blue mr-12 rounded-full">
                <li className="flex text-center justify-items-center h-[90px] w-[90px]">
                  <Image alt="GitHub" src={ GitHubLogo } width={80} className="mx-auto self-center"></Image>
                </li>
              </a>
              <a href='#resume' className="bg-light-blue rounded-full">
                <li className="flex h-[90px] w-[90px]">
                  <p className="self-center mx-auto font-bold">Resume
                  </p>
                </li>
              </a>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
