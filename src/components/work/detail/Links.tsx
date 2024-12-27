interface LinksProps {
  links: {
    github: string;
    notion?: string;
    UTReport?: string;
  };
}
function Links({ links }: LinksProps) {
  return (
    <ul className="grid grid-cols-3 gap-5 mt-[100px]">
      <li>
        <a
          href={links.github}
          target="_blank"
          className="block py-[35px] text-[56px] text-center rounded-full bg-blue text-white"
        >
          Github
        </a>
      </li>
      {links.notion && (
        <li>
          <a
            href={links.github}
            target="_blank"
            className="block py-[35px] text-[56px] text-center rounded-full bg-orange text-white"
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
            className="block py-[35px] text-[56px] text-center rounded-full bg-green text-white"
          >
            UT 결과보고서
          </a>
        </li>
      )}
    </ul>
  );
}

export default Links;
