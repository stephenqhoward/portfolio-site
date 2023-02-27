import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
// Images
import ArchitectureImg from "../../../public/img/architecture.png";
import PreviewImageDiagram from "../../../public/img/PreviewImageDiagram.png";
import InternalAPIRouting from "../../../public/img/InternalApiRouting.png";

const DetailsDiscingUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discing Up Details - Stephen Q Howard</title>
        <meta name="description" content="Discing Up - Details" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#457B9d] to-[#1D3557]">
        <Navbar
          logo="SQH"
          subTitle="Discing Up Details"
          jumpLinks={[]}
          pageLinks={[{ displayText: "Back", anchor: "/" }]}
        />

        {/* <Link href="/">
          <div className="fixed left-8 top-8 flex h-16 w-32 justify-center rounded-xl bg-cream duration-500 hover:cursor-pointer hover:bg-light-blue motion-safe:hover:scale-110">
            <p className="m-auto text-2xl font-bold text-deep-blue">Back</p>
          </div>
        </Link> */}
        <div className="mx-auto flex w-full flex-col bg-deep-blue px-2 md:container">
          <h1 className="mt-12 text-center text-3xl font-bold text-cream">
            Discing <span className="text-orange">Up</span> - Details
          </h1>
          <div className="mx-auto my-4 flex w-full flex-col md:w-[80%]">
            {/* {TableOfContents()} */}
            <div className="my-6 mx-auto w-full border-b-[2px] border-light-blue" />
            {Content()}
          </div>
          <div className="flex justify-center">
            <p className="rounded-3xl bg-deep-blue px-4 py-2 font-thin text-cream">
              &copy; {new Date().getFullYear()} - Stephen Howard
            </p>
          </div>
        </div>
      </main>
      <input
        type="checkbox"
        id="PreviewImageDiagram"
        className="modal-toggle"
      />
      <label htmlFor="PreviewImageDiagram" className="modal cursor-pointer">
        <label
          className="md:w-3xl modal-box relative w-[90%] max-w-none md:max-w-3xl"
          htmlFor=""
        >
          <Image
            src={PreviewImageDiagram}
            alt="Dynamic Preview Image Diagram"
            height="800"
            width="600"
            className="mx-auto max-w-[270px] md:max-w-xl"
            priority
          />
        </label>
      </label>
    </>
  );
};

export default DetailsDiscingUp;

// const TableOfContents = () => {
//   return (
//     <>
//       <h3 className="text-lg font-bold">Table of Contents</h3>
//       <ol className="my-2 space-y-2 indent-5">
//         <li>
//           <Link
//             href="#Architecture"
//             className="text-light-blue hover:text-blue"
//           >
//             <h4 className="text-light-blue">
//               A. Architecture: Internal Processes, Hosting & External APIs
//             </h4>
//           </Link>
//           <ol className="space-y-1">
//             <Link href="#CI/CD" className="">
//               <li className="indent-10 hover:text-blue">1. CI/CD Workflows</li>
//             </Link>
//             <Link href="#InternalRouting" className="">
//               <li className="indent-10 hover:text-blue">2. Internal Routing</li>
//             </Link>
//             <Link href="#APIEndPoints" className="">
//               <li className="indent-10 hover:text-blue">3. API End Points</li>
//             </Link>
//           </ol>
//         </li>
//         <li>
//           <Link href="#KeyFeatures" className="text-light-blue hover:text-blue">
//             <h4>B. Key Features: Details you might miss</h4>
//           </Link>
//           <ol className="space-y-1">
//             <Link href="#WeatherPrefs" className="">
//               <li className="indent-10 hover:text-blue">
//                 1. Course Page: Weather Preferences Settings
//               </li>
//             </Link>
//             <Link href="#DynamicPrevImg" className="">
//               <li className="indent-10 hover:text-blue">
//                 2. Course Page: Dynamic Preview Image
//               </li>
//             </Link>
//           </ol>
//         </li>
//       </ol>
//     </>
//   );
// };

const Content = () => {
  return (
    <>
      {/* Architecture */}
      <div className="mx-auto mb-6 w-full space-y-6" id="Architecture">
        <h3 className="text-3xl font-semibold">
          Architecture: Internal Processes, Hosting & External APIs
        </h3>
        <Image
          alt="Architecture"
          src={ArchitectureImg}
          width="800"
          height="0"
          className="mx-auto"
        />
      </div>
      {/* Architecture -> CI/CD Workflows */}
      <div className="ml-5 mt-5">
        <h4 className="text-xl font-semibold" id="CI/CD">
          CI/CD Workflows
        </h4>
        <ul className="ml-4 list-outside list-disc space-y-4 md:ml-8 lg:ml-[60px]">
          <li className="mt-2">
            Executing{" "}
            <span className="prose mr-1 rounded-md bg-[#00000065] p-1.5">
              git push origin &#60;feature_branch&#62;
            </span>
            to GitHub, triggers Vercel to deploy the commits to a standalone
            Preview environment for that pull request.
          </li>
          <li className="">
            Merged pull requests to Staging and Main trigger a Vercel deploy
            using the respective environment&apos;s variables{" "}
          </li>
          <li className="">
            Main can only be merged into from the staging branch.
          </li>
        </ul>
      </div>
      {/* Architecture -> Internal Routing */}
      <div className="ml-5 mt-5">
        <h4 className="text-xl font-semibold" id="InternalRouting">
          Internal Routing
        </h4>
        <Image
          src={InternalAPIRouting}
          alt="Internal API Routing Chart"
          width="800"
          className="mx-auto my-4"
        />
      </div>
      {/* Architecture -> API End Points */}
      <div className="ml-5 mt-5">
        <h4 id="APIEndPoints" className="text-xl font-semibold">
          API End Points
        </h4>
        <ul className="ml-5 space-y-4">
          <li className="mt-4">
            <h5 className="font-semibold">Daily Cron Job</h5>
            <ul className="ml-10 list-outside">
              <li className="mt-2">
                <span className="rounded-md bg-[#00000065] px-1 py-0.5">
                  POST
                </span>{" "}
                DELETE Stale Conditions Reports
              </li>
            </ul>
          </li>
          <li className="">
            <h5 className="font-semibold">
              Revalidate:{" "}
              <span className="text-[#A6ADBB]">
                On-demand Incremental Static Regeneration (ISR)
              </span>
            </h5>
            <ul className="ml-10 list-outside">
              <li className="mt-2">
                <span className="rounded-md bg-[#00000065] px-1 py-0.5">
                  POST
                </span>{" "}
                Trigger Vercel to rebuild static course page on CREATE
                conditions report
              </li>
            </ul>
          </li>
          <li className="">
            <h5 className="font-semibold">
              Update Heroku Database Credentials
            </h5>
            <ul className="ml-10 list-outside">
              <li className="mt-2">
                <span className="rounded-md bg-[#00000065] px-1 py-0.5">
                  POST
                </span>{" "}
                Handle webhook call from Heroku that the database credentials
                have been rotated. Update Vercel and redeploy.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="my-6 border-b-[2px] border-light-blue" />
      {/* Key Features */}
      <h3 className="text-2xl font-semibold" id="KeyFeatures">
        Key Features:{" "}
        <span className="text-orange">Details you might miss</span>
      </h3>
      <div className="my-8 mx-auto flex w-full flex-col lg:w-[80%]">
        <h4 id="WeatherPrefs" className="mx-auto text-xl md:text-2xl">
          Course Page: <span className="text-orange">Personalized</span> Weather
          Preferences
        </h4>
        <p className="mx-auto my-6 w-full rounded-lg bg-[#242629] p-4 sm:w-[80%]">
          A driving value of Discing Up is its ability to personalize the
          color-coding of hourly weather data. This enables the user to
          at-a-glance see which hours in the coming week will have playable
          weather conditions. This value is seasonal to Spring and Winter when
          inclement weather is predominant.
        </p>
        <iframe
          src="https://scribehow.com/embed/Discing_Up__Personalizing_Weather_Preferences__kvw0ZT8RQ4K02-LK6Lddrw"
          width="640"
          height="640"
          allowFullScreen
          className="mx-auto mt-4 max-w-full rounded-3xl"
        />
      </div>
      <div className="my-8 flex w-full flex-col">
        <h4 id="DynamicPrevImg" className="mx-auto text-xl md:text-2xl">
          Course Page: <span className="text-orange">Dynamic</span> Preview
          Image
        </h4>
        <iframe
          src="https://scribehow.com/embed/Discing_Up__Report_Course_Conditions_and_Share__zc3gPU5KTD6APpTYOMBVpg"
          width="640"
          height="640"
          allowFullScreen
          className="mx-auto mt-4 max-w-full rounded-3xl"
        ></iframe>
        {/* Opens Preview Image Diagram modal */}
        <label
          htmlFor="PreviewImageDiagram"
          className="btn mx-auto mt-6 text-orange"
        >
          See How it Works
        </label>
      </div>
      <div className="my-6 border-b-[2px] border-light-blue" />
      <h5 className="mx-auto mb-6 text-xl text-cream">Check Out the App</h5>
      <a
        href="https://discingup.com/"
        className="mx-auto h-16 w-32 rounded-xl bg-red text-lg font-bold duration-500 hover:bg-light-red motion-safe:hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <button className="h-16 w-32 text-white">Live Site</button>
      </a>
      {/* <div className="my-6 border-b-[2px] border-light-blue" />
      <h3 id="Roadmap">Roadmap to Launch</h3>
      <ul className="ml-5">
        <li className="indent-5">
          <h4>Feature: Design</h4>
          <ul className="ml-4 list-disc">
            <li className="list-inside">
              Login Page - Style Discord Login Page
            </li>
            <li className="list-inside">
              Course Page - Update Conditions History Modal to new design
            </li>
            <li className="list-inside">
              Course Page - Convert 7-Day Forecast to Horizontal Layout
            </li>
            <li className="list-inside">
              Course Page - In place of current 7-Day Forecast drop-downs,
              display &quot;Today&apos;s&quot; weather summary
            </li>
            <li className="list-inside">
              Mobile Responsiveness - Make a final pass, addressing all break
              points.
            </li>
          </ul>
        </li>
        <li className="indent-5">
          <h4>Feature: Content</h4>
          <ul className="ml-4 list-disc">
            <li className="list-inside">
              Course Page - Add Today Weather Summary
              <ul className="ml-6 list-disc">
                <li className="list-inside">
                  Include Max Wind Gusts & Time of Day
                </li>
                <li className="list-inside">
                  Calculate more accurate max wind and precipitation daily
                  values
                </li>
              </ul>
            </li>
            <li className="list-inside">
              Home Page - Create user onboarding workflows / gifs (Scribe)
            </li>
            <li className="list-inside">
              Course Page - Add share button to Conditions Reports section
            </li>
            <li className="list-inside">
              Login Page - Add additional login providers (Facebook, Google,
              passwordless login with email)
            </li>
            <li className="list-inside">
              Database - Seed with most courses in Ohio
            </li>
          </ul>
        </li>
        <li className="indent-5">
          <h4>Feature: Technical</h4>
          <ul className="ml-4 list-disc">
            <li className="list-inside">
              Database / URLs - Convert numeric ordering to slug values (course
              ids and user ids)
            </li>
            <li className="list-inside">
              Testing - Implement testing with Jest & Cypress
            </li>
            <li className="list-inside">
              Conditions Reports - Address client data sanitization concerns
            </li>
          </ul>
        </li>
      </ul> */}
    </>
  );
};
