import { memo } from "react";
interface TitleProps {
  category: string;
  title: string;
  engTitle: string;
}
function Title({ category, title, engTitle }: TitleProps) {
  return (
    <div>
      <div className="text-[18px] md:text-[36px] text-green font-bold">{category}</div>
      <h2 className="py-[16px] pb-0 md:py-[40px] flex flex-col gap-2 md:gap-3">
        <span className="text-[32px] md:text-[96px] font-medium md:font-normal leading-none -ml-1">{title}</span>
        <span className="text-[12px] md:text-[28px] opacity-50">{engTitle}</span>
      </h2>
    </div>
  );
}

export default memo(Title);
