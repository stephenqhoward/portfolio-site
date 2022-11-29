import { type NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume - Stephen Q Howard</title>
        <meta name="description" content="Resume of Stephen Q. Howard" />
      </Head>
      <main className="flex flex-col min-h-screen items-center bg-gradient-to-b from-[#1D3557] to-[#457B9d]">
        <embed src='/Resume - Stephen Quinn Howard.pdf#view=FitV' className="min-h-screen min-w-full md:min-w-[80%]"/>
      </main>
    </>
  )
}

export default Resume;
