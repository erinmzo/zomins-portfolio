import Page from "@/components/common/layout/page/Page";
import { MAIL_TO, RESUME_URL } from "@/constants/url";
import Link from "next/link";

function MenuPage() {
  return (
    <Page>
      <div className="min-h-screen pt-[112px] px-3">
        <ul className="flex flex-col gap-[56px]">
          <li className="text-[44px] font-medium">
            <Link href="/work">Work</Link>
          </li>
          <li className="text-[44px] font-medium">
            <Link href={RESUME_URL}>Resume</Link>
          </li>
          <li className="text-[44px] font-medium">
            <Link href={MAIL_TO}>Contact</Link>
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default MenuPage;
