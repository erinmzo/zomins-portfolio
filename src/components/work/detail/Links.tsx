interface LinksProps {
  links: {
    github: string;
    notion?: string;
    UTReport?: string;
  };
}
function Links({ links }: LinksProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-9 md:mt-[100px]">
      <li>
        <a
          href={links.github}
          target="_blank"
          className="block py-5 md:py-[35px] text-[24px] md:text-[56px] text-center rounded-full bg-blue text-white font-medium"
        >
          Github
        </a>
      </li>
      {links.notion && (
        <li>
          <a
            href={links.notion}
            target="_blank"
            className="block py-5 md:py-[35px] text-[24px] md:text-[56px] text-center rounded-full bg-orange text-white font-medium"
          >
            Notion
          </a>
        </li>
      )}
      {links.UTReport && (
        <li>
          <a
            href={links.UTReport}
            target="_blank"
            className="block py-5 md:py-[35px] text-[24px] md:text-[56px] text-center rounded-full bg-green text-white font-medium"
          >
            UT 결과보고서
          </a>
        </li>
      )}
    </ul>
  );
}

export default Links;
