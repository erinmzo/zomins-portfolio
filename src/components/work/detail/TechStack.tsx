import Label from "@/components/common/label/Label";
import Image from "next/image";

interface TechStackProps {
  techStacks: string[];
  techStackImage?: string;
}

function TechStack({ techStacks, techStackImage }: TechStackProps) {
  return (
    <div className="mt-[160px]">
      <h3 className="font-bold text-[56px] leading-none">TECH STACK</h3>
      <ul className="flex items-center gap-3 mt-[44px] flex-wrap">
        {techStacks.map((stack, index) => (
          <li key={index} className="mt-4">
            <Label label={stack} />
          </li>
        ))}
      </ul>
      {techStackImage && (
        <div className="mt-[104px] relative w-full aspect-auto">
          <Image src={techStackImage} alt="기술스택 아키텍쳐 이미지" fill className="object-contain" />
        </div>
      )}
    </div>
  );
}

export default TechStack;
