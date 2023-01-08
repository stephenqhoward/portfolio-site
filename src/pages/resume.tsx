import { type NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Resume: NextPage = () => {

  return (
    <>
      <Head>
        <title>Resume - Stephen Q Howard</title>
        <meta name="description" content="Resume of Stephen Q. Howard" />
      </Head>
      <main className="flex flex-col min-h-screen items-center bg-gradient-to-b from-[#1D3557] to-[#457B9d]">
        <Link href='/'>
          <div className="w-32 h-16 bg-cream fixed left-8 top-8 rounded-xl hover:cursor-pointer hover:bg-light-blue flex justify-center shadow-xl duration-500 motion-safe:hover:scale-110">
            <p className="text-deep-blue font-bold text-2xl m-auto">Back</p>
          </div>
        </Link>
        <embed src='/Resume - Stephen Quinn Howard.pdf#view=FitV' className="min-h-screen min-w-full md:min-w-[80%]"/>
      </main>
    </>
  )
}

export default Resume;
