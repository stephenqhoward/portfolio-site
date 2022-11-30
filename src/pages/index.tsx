// Next
import { type NextPage } from 'next';
import Head from 'next/head';

// Custom Components
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Bio } from '../components/Bio';
import { PortfolioItem } from '../components/PortfolioItem';
import { Footer } from '../components/Footer';

// Images
import NextJsLogo from '../../public/img/nextjs-icon.svg';
import ReactLogo from '../../public/img/react-js-icon.svg';
import TypescriptLogo from '../../public/img/typescript-programming-language-icon.svg';
import TailwindLogo from '../../public/img/tailwind-css-icon.svg';
import VercelLogo from '../../public/img/vercel.svg';
import TrpcLogo from '../../public/img/trpc-seeklogo.com.svg';
import PrismaLogo from '../../public/img/prisma-2.svg';
import PostgresqlLogo from '../../public/img/postgresql-icon.svg';
import ZodLogo from '../../public/img/zod-icon.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stephen Q Howard</title>
        <meta name="description" content="Portfolio site of Stephen Q. Howard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-[#1D3557] to-[#457B9d]">
        <Navbar logo="SQH" subTitle="Portfolio Site" links={[{displayText: 'About', anchor: '#about'}, {displayText: 'Portfolio', anchor: '#portfolio'}, {displayText: 'Social', anchor: '#social'}, {displayText: 'Resume', anchor: '/resume'} ]}></Navbar>

        <div className="container flex flex-col items-center justify-center">
          
          <section className="flex flex-col min-h-[58vh] min-w-full bg-cream color-light-blue items-center justify-center relative">
            <div className="curve-divider-navbar">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
              </svg>
            </div>
            <Hero title={`Hi! I'm Stephen.`} subtitle='Former Certified Public Accountant (CPA) - Current Full Stack Developer'></Hero>
            <div className="wavy-divider-hero">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
              </svg>
            </div>
          </section>
          
          <section className="container min-h-[40vh] flex flex-col flex-wrap bg-blue pt-6 pb-12 px-4 md:px-28" id="about">
            <Bio
              text={['I am a recent graduate of a 28-week coding boot camp, while working full time. I am no stranger to a demanding work environment, getting my start out of college in a Big Four public accounting firm.','I have a history of researching and implementing technical solutions to business problems.','You will find I am self-motivated, highly adaptable, and one who pays close attention to the details.',`I am looking for experience that will provide awareness for what I don't know, the structure for high performing software development teams, and the core technical competency to prototype and scale startup ideas.`]}
              skills={['JavaScript','Python','ReactJs','Django','PostgreSQL','Typescript','Tailwind','HTML','CSS','Git','GitHub','Slack']}
            ></Bio>
          </section>

          <section className="container bg-cream px-4 md:px-28 pt-6 pb-12 flex flex-col items-center space-y-4 relative" id="portfolio">
            <div className="wavy-divider-bio">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
              </svg>
            </div>
            <h2 className="text-4xl self-start">PORTFOLIO</h2>
            <PortfolioItem 
              title="Urankar Law, LLC - Landing Page"
              description="Referencing the client&apos;s theme, built and styled the landing page layout and components."
              technologies= {[
                {src: NextJsLogo, alt: 'Next.js', width: 115, url: 'https://nextjs.org/'}, 
                {src: ReactLogo, alt: 'React.js', width: 30, url: 'https://reactjs.org/'}, 
                {src: TypescriptLogo, alt: 'Typescript', width: 30, url: 'https://www.typescriptlang.org/'}, 
                {src: TailwindLogo, alt: 'Tailwind CSS', width: 35, url: 'https://tailwindcss.com/'}, 
                {src: VercelLogo, alt: 'Vercel', width: 105, url: 'https://vercel.com/'}
              ]}
              url="http://urankarlaw.com"
              buttons={[
                {url: 'http://urankarlaw.com', type: 'live', text: 'Live Site'}, 
                {type: 'disabled', text: 'GitHub', subtext:'(Private Repo)'}
              ]}
              img={
                {
                  src: '/img/Urankar-Law-Thumbnail.png',
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
                {src: NextJsLogo, alt: 'Next.js', width: 115, url: 'https://nextjs.org/'}, 
                {src: ReactLogo, alt: 'React.js', width: 40, url: 'https://reactjs.org/'}, 
                {src: TypescriptLogo, alt: 'Typescript', width: 35, url: 'https://www.typescriptlang.org/'},  
                {src: TrpcLogo, alt: 'tRPC', width: 35, url: 'https://trpc.io/'},
                {src: PrismaLogo, alt: 'Prisma', width: 105, url: 'https://www.prisma.io/'},
                {src: ZodLogo, alt: 'Zod', width: 45, url: 'https://github.com/colinhacks/zod'},
                {src: PostgresqlLogo, alt: 'PostgreSQL', width: 40, url:'https://www.postgresql.org/'},
                {src: TailwindLogo, alt: 'Tailwind CSS', width: 40, url: 'https://tailwindcss.com/'},
                {src: VercelLogo, alt: 'Vercel', width: 105, url: 'https://vercel.com/'},
              ]}
              // https://discing-up.vercel.app/
              url='https://discing-up.vercel.app/'
              buttons={[
                {url: 'http://urankarlaw.com', type: 'site', text: 'Live Site'}, 
                {type: 'disabled', text: 'GitHub', subtext:'(Private Repo)'}
              ]}
              img={
                {
                  src: '/img/discing-up-thumbnail.png',
                  alt: 'Urankar Law, LLC',
                  width: 350,
                  height: 400,
                }
              }
              imgPosition="left"
            ></PortfolioItem>
            <div className="h-0 md:h-4"></div>
            <div className="wave-divider-footer -z-5">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-6 lg:h-12">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
            </div>
          </section>
          <section className="container bg-deep-blue" id="social">
            <Footer></Footer>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
