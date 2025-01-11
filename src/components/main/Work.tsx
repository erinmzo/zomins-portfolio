import { WORK_LIST } from "@/constants/work";
import Link from "next/link";
import Page from "../common/layout/page/Page";
import WorkCard from "../work/list/WorkCard";

function Work() {
  return (
    <Page>
      <div className="pt-[72px] md:pt-[140px] flex flex-col gap-3 md:gap-6 pb-[120px]">
        <h3 className="font-bold text-[32px] md:text-[64px]">WORK</h3>
        <ul className="border-t border-black">
          {WORK_LIST.slice(0, 3).map((work) => (
            <li key={work.id}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
        <div className="text-center mt-[24px] md:mt-[56px]">
          <Link
            href="/work"
            className="bg-blue py-4 md:py-5 px-[30px] md:px-8 rounded-2xl font-bold text-white text-[16px] md:text-[36px]"
          >
            More Project
          </Link>
        </div>
      </div>
    </Page>
  );
}

export default Work;
