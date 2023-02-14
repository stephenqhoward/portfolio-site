import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume - Stephen Q Howard</title>
        <meta name="description" content="Resume of Stephen Q. Howard" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#1D3557] to-[#457B9d]">
        <Link href="/">
          <div className="fixed left-8 top-8 flex h-16 w-32 justify-center rounded-xl bg-cream duration-500 hover:cursor-pointer hover:bg-light-blue motion-safe:hover:scale-110">
            <p className="m-auto text-2xl font-bold text-deep-blue">Back</p>
          </div>
        </Link>
        <embed
          src="/Resume - Stephen Quinn Howard.pdf#view=FitV"
          className="min-h-screen min-w-full md:min-w-[80%]"
        />
      </main>
    </>
  );
};

export default Resume;
