import { memo } from "react";
interface TitleProps {
  category: string;
  title: string;
  engTitle: string;
}
function Title({ category, title, engTitle }: TitleProps) {
  return (
    <div>
      <div className="text-[36px] text-green font-bold">{category}</div>
      <h2 className="py-[40px] flex flex-col gap-4">
        <span className="text-[96px] leading-none">{title}</span>
        <span className="text-[32px] opacity-50">{engTitle}</span>
      </h2>
    </div>
  );
}

export default memo(Title);
