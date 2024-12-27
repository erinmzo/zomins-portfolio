interface DescriptionProps {
  description: string;
}
function Description({ description }: DescriptionProps) {
  return <div className="whitespace-pre-line text-[28px]">{description}</div>;
}

export default Description;
