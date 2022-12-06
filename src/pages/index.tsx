// Next
import { type NextPage } from 'next';
import Head from 'next/head';

// Custom Components
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Bio } from '../components/Bio';
import { PortfolioItem } from '../components/PortfolioItem';
import { EducationItem } from '../components/EducationItem';
import { Footer } from '../components/Footer';
import { DividerNavbar } from '../components/Dividers';
import { DividerHero } from '../components/Dividers';
import { DividerBio } from '../components/Dividers';
import { DividerEducation } from '../components/Dividers';
import { DividerFooter } from '../components/Dividers';

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
import Auth0Logo from '../../public/img/auth0-icon.svg';
import DjangoLogo from '../../public/img/django-icon.svg';
import GoogleCalendarLogo from '../../public/img/Google_Calendar_icon.svg';
import FirebaseLogo from '../../public/img/firebase-icon.svg';
import TwilioLogo from '../../public/img/Twilio-logo.svg';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stephen Q Howard</title>
        <meta name="description" content="Portfolio site of Stephen Q. Howard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#1D3557] to-[#457B9d] flex flex-col items-center justify-center min-h-screen">
        <Navbar logo="SQH" subTitle="Portfolio Site" links={[{displayText: 'About', anchor: '#about'}, {displayText: 'Portfolio', anchor: '#portfolio'}, {displayText: 'Education', anchor: '#education'}, {displayText: 'Resume', anchor: '/resume'} ]}></Navbar>

        <div className="lg:container flex flex-col items-center justify-center w-full">
          
          <section className="bg-cream color-light-blue flex flex-col items-center justify-center min-h-[58vh] min-w-full relative">
            <DividerNavbar></DividerNavbar>
            <Hero title={`Hi! I'm Stephen.`} subtitle='Full Stack Developer'></Hero>
            <DividerHero></DividerHero>
          </section>
          
          <section className="bg-blue flex flex-col flex-wrap min-h-[40vh] pt-6 pb-12 px-4 md:px-28" id="about">
            <Bio
              text={['I am a recent graduate of a 28-week coding boot camp, while working full time. I am no stranger to a demanding work environment, getting my start out of college in a Big Four public accounting firm.','I have a history of researching and implementing technical solutions to business problems.','You will find I am self-motivated, highly adaptable, and one who pays close attention to the details.',`I am looking for experience that will provide awareness for what I don't know, the structure for high performing software development teams, and the core technical competency to prototype and scale startup ideas.`]}
              skills={['JavaScript','Python','ReactJs','Django','PostgreSQL','Typescript','Tailwind','HTML','CSS','Git','GitHub','Slack']}
            ></Bio>
          </section>

          <section className="bg-cream flex flex-col items-center pb-12 pt-6 px-4 md:px-28 relative space-y-4 w-full" id="portfolio">
            <DividerBio></DividerBio>
            <h2 className="md:self-start text-4xl">PORTFOLIO</h2>
            <PortfolioItem 
              title="Urankar Law, LLC - Landing Page"
              description={`Referencing the client's theme, built and styled the landing page layout and components.`}
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
            <DividerEducation></DividerEducation>
          </section>

          <section className="bg-blue flex flex-col items-center pb-12 pt-6 px-4 md:px-28 relative space-y-4 w-full" id="education">
            <h2 className="md:self-start text-4xl">Education</h2>
            <EducationItem 
              institution="Code Platoon"
              description="28-Week Online Full Stack Development Bootcamp"
              technologies={[
                {src: ReactLogo, alt: 'React.js', width: 40, url: 'https://reactjs.org/'},
                {src: DjangoLogo, alt: 'Django', width: 30, url: 'https://www.djangoproject.com/'},
                {src: PostgresqlLogo, alt: 'PostgreSQL', width: 40, url:'https://www.postgresql.org/'},
              ]} 
              url="https://www.codeplatoon.org/"
              projectTitle="Group Project: Ahead of the Game (AotG)"
              projectDescription={[
                "A service that allows users to integrate their favorite teams' schedule into Google Calendar and subscribe to event-start text notifications.", 
                "Personal Contribution: Google Calendar integration • CI/CD to Heroku using GitHub Actions • dependency managemet • database design • Mural & Trello board management"]}
              integratedApis={[
                {src: Auth0Logo, alt: 'Auth0', width: 40, url: 'https://auth0.com/'},
                {src: GoogleCalendarLogo, alt: 'Google Calendar', width: 40, url: 'https://calendar.google.com/'},
                {src: FirebaseLogo, alt: 'Firebase', width: 40, url: 'https://firebase.google.com/'},
                {src: TwilioLogo, alt: 'Twilio', width: 115, url: 'https://www.twilio.com/'},
              ]} 
            >
            </EducationItem>
            <EducationItem 
              institution="Bowling Green State University"
              description="Bachelor of Science in Business Administration (concentration: accounting)"
              honors="cum laude"
              url="https://www.bgsu.edu/"
            >
            </EducationItem>
            <div className="h-0 md:h-4"></div>
            <DividerFooter></DividerFooter>
          </section>

          <section className="bg-deep-blue w-full" id="social">
            <Footer></Footer>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
