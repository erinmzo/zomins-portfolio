import { MAIL_TO, RESUME_URL } from "@/constants/url";
import Link from "next/link";

function GlobalNav() {
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-[72px] text-2xl">
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <a href={RESUME_URL} target="_blank">
            Resume
          </a>
        </li>
        <li>
          <a href={MAIL_TO} target="_blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;
