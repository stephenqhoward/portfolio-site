import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "../../../public/img/github-icon.svg";
import styles from "./Footer.module.css";

const Footer = () => (
  <>
    <div className={styles["footer"]}>
      <ul className="my-4 flex flex-row items-center justify-center space-x-8 md:my-8">
        <li className="flex items-center rounded-full bg-deep-blue duration-500 motion-safe:hover:scale-105">
          <a
            href="https://www.linkedin.com/in/stephenqhoward/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linked In Profile"
            className="rounded-full"
          >
            <div className="flex h-20 w-20 place-self-center">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 122.31"
                className={`${styles["linkedin-logo"]} mx-auto h-12 w-12 self-center`}
              >
                <path
                  className={styles["outer"]}
                  d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
                />
                <path
                  className={styles["inner"]}
                  d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
                />
              </svg>
            </div>
          </a>
        </li>
        <li className="rounded-full bg-deep-blue duration-500 motion-safe:hover:scale-105">
          <a
            href="https://github.com/stephenqhoward"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full bg-deep-blue"
          >
            <div className="flex h-20 w-20 justify-items-center text-center">
              <Image
                alt="GitHub"
                src={GitHubLogo}
                width={80}
                className="mx-auto h-12 w-12 self-center"
              />
            </div>
          </a>
        </li>
        <li className="rounded-full bg-deep-blue duration-500 motion-safe:hover:scale-105">
          <Link href="/resume" className="flex h-20 w-20 rounded-full">
            <p className="mx-auto self-center font-bold">Resume</p>
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex justify-center">
      <p className="rounded-3xl bg-deep-blue px-4 py-2 font-thin text-cream">
        &copy; {new Date().getFullYear()} - Stephen Howard
      </p>
    </div>
  </>
);

export default Footer;
