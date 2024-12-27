interface FeatureProps {
  features: {
    title: string;
    description: string;
  }[];
}
function Feature({ features }: FeatureProps) {
  return (
    <div className="mt-[160px]">
      <h3 className="font-bold text-[56px]">FEATURE</h3>
      <ol className="flex flex-col gap-5 mt-[44px]">
        {features.map((feature, index) => (
          <li key={index} className="p-[40px] bg-[#fffbe8] rounded-[20px]">
            <h4 className="text-[44px] font-bold">{feature.title}</h4>
            <p className="text-[28px] whitespace-pre-line leading-loose mt-[64px]">{feature.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Feature;
