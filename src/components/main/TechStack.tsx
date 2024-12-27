import { MY_STACK } from "@/constants/stack";
import { GITHUB_URL, RESUME_URL, VELOG_URL } from "@/constants/url";
import Label from "../common/label/Label";
import Page from "../common/layout/page/Page";

function TechStack() {
  return (
    <Page>
      <div className="pt-[140px]">
        <h3 className="font-bold text-[64px]">TECH STACK</h3>
        <ul className="flex flex-wrap items-center gap-4 mt-[40px] mb-[100px]">
          {MY_STACK.map((stack) => (
            <li key={stack.label} className="shrink-0 mb-4">
              <Label link={stack.link} label={stack.label} />
            </li>
          ))}
        </ul>
        <ul className="border-t border-black pt-[44px] grid grid-cols-3 gap-[20px]">
          <li>
            <a
              href={GITHUB_URL}
              className="block py-[35px] text-[72px] text-center rounded-full bg-blue text-white"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={VELOG_URL}
              className="block py-[35px] text-[72px] text-center rounded-full bg-orange text-white"
              target="_blank"
            >
              Velog
            </a>
          </li>
          <li>
            <a
              href={RESUME_URL}
              className="block py-[35px] text-[72px] text-center rounded-full bg-green text-white"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default TechStack;
