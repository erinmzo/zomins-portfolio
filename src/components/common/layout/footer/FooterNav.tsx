import { GITHUB_URL, MAIL_TO, RESUME_URL, VELOG_URL } from "@/constants/url";
import Link from "next/link";

function FooterNav() {
  return (
    <nav className="mt-[200px]">
      <ul className="flex justify-between items-center text-2xl text-blue">
        <li className="font-bold underline">
          <a href={GITHUB_URL} target="_blank">
            Github
          </a>
        </li>
        <li className="font-bold underline">
          <Link href="/work">Work</Link>
        </li>
      </ul>
      <ul className="flex justify-between items-center text-2xl text-blue">
        <li className="font-bold underline">
          <a href={VELOG_URL} target="_blank">
            Velog
          </a>
        </li>
        <li>
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
