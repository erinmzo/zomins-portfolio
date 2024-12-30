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
      <ol className="flex flex-col gap-4 md:gap-5 mt-[16px] md:mt-[44px]">
        {features.map((feature, index) => (
          <li key={index} className="py-5 px-4 md:p-[40px] bg-[#fffbe8] rounded-[12px] md:rounded-[20px]">
            <h4 className="text-[24px] md:text-[44px] font-bold">{feature.title}</h4>
            <p className="text-[16px] md:text-[28px] whitespace-pre-line leading-[26px] md:leading-loose mt-[36px] md:mt-[64px]">
              {feature.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Feature;
