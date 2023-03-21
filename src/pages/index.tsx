// Next
import { type NextPage } from "next";
import Head from "next/head";

// Custom Components
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Bio } from "../components/Bio";
import { PortfolioItem } from "../components/PortfolioItem";
import { EducationItem } from "../components/EducationItem";
import { Footer } from "../components/Footer";
import { DividerNavbar } from "../components/Dividers";
import { DividerHero } from "../components/Dividers";
import { DividerBio } from "../components/Dividers";
import { DividerEducation } from "../components/Dividers";
import { DividerFooter } from "../components/Dividers";

// Images
import NextJsLogo from "../../public/img/nextjs-icon.svg";
import ReactLogo from "../../public/img/react-js-icon.svg";
import TypescriptLogo from "../../public/img/typescript-programming-language-icon.svg";
import TailwindLogo from "../../public/img/tailwind-css-icon.svg";
import VercelLogo from "../../public/img/vercel.svg";
import TrpcLogo from "../../public/img/trpc-seeklogo.com.svg";
import PrismaLogo from "../../public/img/prisma-2.svg";
import PostgresqlLogo from "../../public/img/postgresql-icon.svg";
import ZodLogo from "../../public/img/zod-icon.png";
import Auth0Logo from "../../public/img/auth0-icon.svg";
import DjangoLogo from "../../public/img/django-icon.svg";
import DjangoRestFrameworkLogo from "../../public/img/drf-logo.png";
import GoogleCalendarLogo from "../../public/img/Google_Calendar_icon.svg";
import FirebaseLogo from "../../public/img/firebase-icon.svg";
import TwilioLogo from "../../public/img/Twilio-logo.svg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stephen Q Howard</title>
        <meta
          name="description"
          content="Portfolio site of Stephen Q. Howard"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Portfolio site of Stephen Q. Howard"
        />
        <meta
          property="og:description"
          content="Full Stack Software Engineer"
        />
        <meta
          property="og:image"
          content="https://www.stephenqhoward.com/Site-Preview.png"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#457B9D] to-[#1D3557]">
        <Navbar
          logo="SQH"
          subTitle="Portfolio Site"
          jumpLinks={[
            { displayText: "About", anchor: "#about" },
            { displayText: "Portfolio", anchor: "#portfolio" },
            { displayText: "Education", anchor: "#education" },
          ]}
          pageLinks={[{ displayText: "Resume", anchor: "/resume" }]}
        />

        <div className="flex w-full flex-col items-center justify-center lg:container">
          <section className="relative flex min-h-[50vh] min-w-full flex-col items-center justify-center bg-cream">
            <DividerNavbar />
            <Hero
              title={`Hi! I'm Stephen.`}
              subtitle="Full Stack Software Engineer"
            />
            <DividerHero />
          </section>

          <section
            className="flex min-h-[40vh] w-full flex-row bg-deep-blue px-4 pt-4 pb-12"
            id="about"
          >
            <Bio
              bullets={[
                "... someone who between finishing college and starting work, studied 12 hours a day for 6 months and passed all four sections of the Certified Public Accountant exam.",
                "... no stranger to a demanding work environment, getting my start out of college in a Big Four public accounting firm.",
                "... a recent graduate of a 28-week full stack software engineering boot camp, while working full time.",
                "... looking for an environment where I have the freedom to tackle difficult problems with mentor-level guidance, and receive regular feedback on best practices to perfect the deliverable.",
              ]}
              text={[
                "Coding is work for some - it's play for me. I love shipping code.",
              ]}
              quotedText="Coding is work for some - it's play for me. I love shipping code."
              skills={[
                "JavaScript",
                "Python",
                "ReactJs",
                "Django",
                "PostgreSQL",
                "Typescript",
                "Tailwind",
                "HTML",
                "CSS",
                "Git",
                "GitHub",
                "Slack",
              ]}
            />
          </section>

          <section
            className="relative flex w-full flex-col items-center space-y-4 bg-cream px-4 pb-12 pt-6 md:px-28"
            id="portfolio"
          >
            <DividerBio />
            <h2 className="pt-2 text-4xl text-blue md:self-start">PORTFOLIO</h2>
            <PortfolioItem
              title="Urankar Law, LLC"
              description={`Referencing the client's theme, built and styled the landing page layout and components.`}
              technologies={[
                {
                  src: NextJsLogo,
                  alt: "Next.js",
                  width: 115,
                  url: "https://nextjs.org/",
                },
                {
                  src: ReactLogo,
                  alt: "React.js",
                  width: 30,
                  url: "https://reactjs.org/",
                },
                {
                  src: TypescriptLogo,
                  alt: "Typescript",
                  width: 30,
                  url: "https://www.typescriptlang.org/",
                },
                {
                  src: TailwindLogo,
                  alt: "Tailwind CSS",
                  width: 35,
                  url: "https://tailwindcss.com/",
                },
                {
                  src: VercelLogo,
                  alt: "Vercel",
                  width: 105,
                  url: "https://vercel.com/",
                },
              ]}
              url="http://urankarlaw.com"
              buttons={[
                {
                  url: "http://urankarlaw.com",
                  type: "live",
                  text: "Live Site",
                },
                { type: "disabled", text: "GitHub", subtext: "(Private Repo)" },
              ]}
              img={{
                src: "/img/Urankar-Law-Thumbnail.png",
                alt: "Urankar Law, LLC",
                width: 350,
                height: 400,
              }}
              imgPosition="right"
            />
            <PortfolioItem
              title="Discing Up - Full Stack Web Application"
              description="Web application for monitoring weather and reporting course conditions for disc golf courses in central Ohio."
              technologies={[
                {
                  src: NextJsLogo,
                  alt: "Next.js",
                  width: 115,
                  url: "https://nextjs.org/",
                },
                {
                  src: ReactLogo,
                  alt: "React.js",
                  width: 40,
                  url: "https://reactjs.org/",
                },
                {
                  src: TypescriptLogo,
                  alt: "Typescript",
                  width: 35,
                  url: "https://www.typescriptlang.org/",
                },
                {
                  src: TrpcLogo,
                  alt: "tRPC",
                  width: 35,
                  url: "https://trpc.io/",
                },
                {
                  src: PrismaLogo,
                  alt: "Prisma",
                  width: 105,
                  url: "https://www.prisma.io/",
                },
                {
                  src: ZodLogo,
                  alt: "Zod",
                  width: 45,
                  url: "https://github.com/colinhacks/zod",
                },
                {
                  src: PostgresqlLogo,
                  alt: "PostgreSQL",
                  width: 40,
                  url: "https://www.postgresql.org/",
                },
                {
                  src: TailwindLogo,
                  alt: "Tailwind CSS",
                  width: 40,
                  url: "https://tailwindcss.com/",
                },
                {
                  src: VercelLogo,
                  alt: "Vercel",
                  width: 105,
                  url: "https://vercel.com/",
                },
              ]}
              url="https://discingup.com/"
              buttons={[
                {
                  url: "https://discingup.com/",
                  type: "live",
                  text: "Live Site",
                },
                { type: "disabled", text: "GitHub", subtext: "(Private Repo)" },
                {
                  url: "/discingup/details",
                  type: "details",
                  text: "Details",
                },
              ]}
              img={{
                src: "/img/discing-up-preview.png",
                alt: "Discing Up",
                width: 375,
                height: 400,
              }}
              imgPosition="left"
            />
            <div className="pb-4"></div>
            <DividerEducation />
          </section>

          <section
            className="relative flex w-full flex-col items-center space-y-4 bg-deep-blue px-2 pb-12 pt-6 md:px-4"
            id="education"
          >
            <h2 className="self-start text-4xl md:self-center">Education</h2>
            <EducationItem
              institution="Code Platoon"
              description="28-Week Online Full Stack Development Bootcamp"
              technologies={[
                {
                  src: ReactLogo,
                  alt: "React.js",
                  width: 40,
                  url: "https://reactjs.org/",
                },
                {
                  src: DjangoLogo,
                  alt: "Django",
                  width: 30,
                  url: "https://www.djangoproject.com/",
                },
                {
                  src: DjangoRestFrameworkLogo,
                  alt: "Django Rest Framework",
                  width: 100,
                  url: "https://www.django-rest-framework.org/",
                },
                {
                  src: PostgresqlLogo,
                  alt: "PostgreSQL",
                  width: 40,
                  url: "https://www.postgresql.org/",
                },
              ]}
              url="https://www.codeplatoon.org/"
              projectTitle="Group Project: Ahead of the Game"
              projectDescription={[
                "A service that enables users to integrate their favorite teams' schedule into Google Calendar and subscribe to event-start text notifications.",
                "Personal Contribution: ",
                "• Google Calendar integration",
                "• CI/CD to Heroku using GitHub Actions",
                "• Dependency managemet",
                "• Database design",
                "• Mural & Trello board management",
              ]}
              integratedApis={[
                {
                  src: Auth0Logo,
                  alt: "Auth0",
                  width: 40,
                  url: "https://auth0.com/",
                },
                {
                  src: GoogleCalendarLogo,
                  alt: "Google Calendar",
                  width: 40,
                  url: "https://calendar.google.com/",
                },
                {
                  src: FirebaseLogo,
                  alt: "Firebase",
                  width: 40,
                  url: "https://firebase.google.com/",
                },
                {
                  src: TwilioLogo,
                  alt: "Twilio",
                  width: 115,
                  url: "https://www.twilio.com/",
                },
              ]}
            />
            <EducationItem
              institution="Bowling Green State University"
              description="Bachelor of Science in Business Administration (concentration: accounting)"
              honors="cum laude"
              url="https://www.bgsu.edu/"
            />
            <div className="h-0 md:h-4"></div>
            <DividerFooter />
          </section>

          <section className="w-full bg-blue" id="social">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
