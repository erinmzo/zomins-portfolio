interface FeatureProps {
  features: {
    title: string;
    description: string;
  }[];
}
function Feature({ features }: FeatureProps) {
  return (
    <div className="mt-[48px] md:mt-[160px]">
      <h3 className="font-bold text-[28px] md:text-[56px]">FEATURE</h3>
      <ol className="flex flex-col gap-4 md:gap-5 mt-[16px] md:mt-[32px]">
        {features.map((feature, index) => (
          <li key={index} className="py-5 px-4 md:px-[40px] md:py-[36px] bg-[#fffbe8] rounded-[12px] md:rounded-[20px]">
            <h4 className="text-[24px] md:text-[36px] font-bold">{feature.title}</h4>
            <p className="text-[16px] md:text-[28px] whitespace-pre-line leading-[26px] md:leading-[1.3] mt-[36px] md:mt-[64px]">
              {feature.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Feature;
