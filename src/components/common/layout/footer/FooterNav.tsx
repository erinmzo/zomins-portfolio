import { BLOG_URL, GITHUB_URL, MAIL_TO, RESUME_URL } from "@/constants/url";
import Link from "next/link";

function FooterNav() {
  return (
    <nav className="mt-[96px] md:mt-[200px]">
      <ul className="flex justify-between items-center text-base md:text-2xl text-blue">
        <li className="font-bold underline">
          <a href={GITHUB_URL} target="_blank">
            Github
          </a>
        </li>
        <li className="font-bold underline">
          <Link href="/work">Work</Link>
        </li>
      </ul>
      <ul className="flex justify-between items-center text-base md:text-2xl text-blue mt-[24px]">
        <li className="font-bold underline">
          <a href={BLOG_URL} target="_blank">
            Blog
          </a>
        </li>
        <li className="hidden md:block">
          <a href={MAIL_TO} target="_blank">
            zomins@naver.com
          </a>
        </li>
        <li className="font-bold underline">
          <a href={RESUME_URL} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
