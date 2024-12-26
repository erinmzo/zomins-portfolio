import { WORK_LIST } from "@/constants/work";
import WorkCard from "./WorkCard";

function WorkList() {
  return (
    <ul className="py-[140px]">
      {WORK_LIST.map((work) => (
        <li key={work.id} className="first:border-t first:border-black">
          <WorkCard work={work} />
        </li>
      ))}
    </ul>
  );
}

export default WorkList;
