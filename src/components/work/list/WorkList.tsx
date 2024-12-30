import { WORK_LIST } from "@/constants/work";
import WorkCard from "./WorkCard";

function WorkList() {
  return (
    <ul className="py-[100px] md:py-[140px]">
      {WORK_LIST.map((work) => (
        <li key={work.id}>
          <WorkCard work={work} />
        </li>
      ))}
    </ul>
  );
}

export default WorkList;
