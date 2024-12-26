import { WORK_LIST } from "@/constants/work";
import Link from "next/link";
import Page from "../common/layout/page/Page";
import WorkCard from "../work/list/WorkCard";

function Work() {
  return (
    <Page>
      <div className="pt-[140px] flex flex-col gap-8 pb-[120px]">
        <h3 className="font-bold text-[64px]">WORK</h3>
        <ul>
          {WORK_LIST.slice(0, 3).map((work) => (
            <li key={work.id} className="first:border-t first:border-black">
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
        <div className="text-center mt-[56px]">
          <Link href="/work" className="bg-blue py-5 px-8 rounded-2xl font-bold text-white text-[36px]">
            More Project
          </Link>
        </div>
      </div>
    </Page>
  );
}

export default Work;
