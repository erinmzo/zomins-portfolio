interface DescriptionProps {
  description: string;
}
function Description({ description }: DescriptionProps) {
  return <div className="whitespace-pre-line text-[16px] md:text-[28px] leading-[26px]">{description}</div>;
}

export default Description;
