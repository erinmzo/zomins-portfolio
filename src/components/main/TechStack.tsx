import { MY_STACK } from "@/constants/stack";
import { BLOG_URL, GITHUB_URL, RESUME_URL } from "@/constants/url";
import Label from "../common/label/Label";
import Page from "../common/layout/page/Page";

function TechStack() {
  return (
    <Page>
      <div className="pt-[90px] md:pt-[140px]">
        <h3 className="font-bold text-[32px] md:text-[64px]">TECH STACK</h3>
        <ul className="flex flex-wrap items-center gap-2 md:gap-4 mt-[32px] md:mt-[40px] mb-[24px] md:mb-[100px]">
          {MY_STACK.map((stack) => (
            <li key={stack.label} className="shrink-0 mb-2 md:mb-4">
              <Label link={stack.link} label={stack.label} />
            </li>
          ))}
        </ul>
        <ul className="border-t border-black pt-[24px] md:pt-[44px] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[20px]">
          <li>
            <a
              href={GITHUB_URL}
              className="block py-5 md:py-[35px] text-[24px] md:text-[72px] text-center rounded-full bg-blue text-white font-medium"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={BLOG_URL}
              className="block py-5 md:py-[35px] text-[24px] md:text-[72px] text-center rounded-full bg-orange text-white font-medium"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href={RESUME_URL}
              className="block py-5 md:py-[35px] text-[24px] md:text-[72px] text-center rounded-full bg-green text-white font-medium"
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
