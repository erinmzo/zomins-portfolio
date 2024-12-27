import Link from "next/link";

interface WorkCardProps {
  work: {
    id: number;
    category: string;
    title: string;
    url: string;
    tags: string[];
  };
}
function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="border-b border-black py-[40px]">
      <Link href={`/work/${work.id}`}>
        <div
          className={`${work.category === "Frontend" ? "text-green" : "text-blue"} font-bold text-[36px] leading-none`}
        >
          {work.category}
        </div>
        <h4 className="mt-6 text-[96px] font-regular leading-none">{work.title}</h4>
        <ul className="mt-[64px] flex items-center gap-2">
          {work.tags.map((tag) => (
            <li key={tag} className="text-[20px] font-bold bg-[#f5f5f5] py-3 px-4 rounded-full leading-none">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default WorkCard;
