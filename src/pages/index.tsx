import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stephen Q. Howard</title>
        <meta name="description" content="Portfolio site of Stephen Q. Howard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15222c] to-[#022b6d]">
        <section>
          <h1>Welcome to Stephen Q. Howard's portfolio site.</h1>
          <p>Please excuse the saw dust as I spin this up!</p>
        </section>
        <section>
          <section>
            <div>
              <h2>About Me</h2>
              <p>I am a recent graduate of a 28-week coding boot camp, while working full time. I am no stranger to a demanding work environment, getting my start out of college in a Big Four public accounting firm.</p>
              <p>I have a history of researching and implementing technical solutions to business problems.</p>
              <p>You will find I am self-motivated, highly adaptable, and one who pays close attention to the details.</p>
              <p>I am looking for experience that will provide awareness for what I don&apos;t know, an understanding of the necessary structure for high performing software development teams, and the core technical competency to prototype my startup ideas.</p>
            </div>
            <div>
              <h2>Skills</h2>
              <p>JavaScript - Python - ReactJs - Django - PostgreSQL - Typescript - Tailwind - HTML - CSSS - Git - GitHub - Slack</p>
            </div>
          </section>
          <section>
            <h2>Portfolio</h2>
            <div>
              <h3>Urankar Law, LLC</h3>
            </div>
            <div>
              <h3>Discing Up</h3>
            </div>
          </section>
          <section>
            <h2>Links</h2>
            <ul>
              <li>LinkedIn: </li>
              <li>GitHub: </li>
              <li>Resume: </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
