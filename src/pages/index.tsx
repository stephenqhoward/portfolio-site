import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

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
          <section className="min-h-screen min-w-full bg-light-blue">
            <h1>Welcome to Stephen Q Howard&apos;s portfolio site.</h1>
            <p>Please excuse the saw dust as I spin this up!</p>
          </section>
          <section className="container min-h-[40vh] flex flex-row bg-blue" id="about">
            <div className="pr-36">
              <h2>About Me</h2>
              <ul>
                <li>I am a recent graduate of a 28-week coding boot camp, while working full time. I am no stranger to a demanding work environment, getting my start out of college in a Big Four public accounting firm.</li>
                <li>I have a history of researching and implementing technical solutions to business problems.</li>
                <li>You will find I am self-motivated, highly adaptable, and one who pays close attention to the details.</li>
                <li>I am looking for experience that will provide awareness for what I don&apos;t know, an understanding of the necessary structure for high performing software development teams, and the core technical competency to prototype my startup ideas.</li>
              </ul>
            </div>
            <div>
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
          <section className="container min-h-[40vh] bg-deep-blue" id="social">
            <h2>Social</h2>
            <ul>
              <li>LinkedIn: <a href='https://www.linkedin.com/in/stephenqhoward/'>StephenQHoward</a></li>
              <li>GitHub: <a href='https://github.com/stephenqhoward'>StephenQHoward</a></li>
              <li>Resume: </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
