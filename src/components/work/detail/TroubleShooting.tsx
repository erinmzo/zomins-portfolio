interface TroubleShootingProps {
  troubleShooting: {
    title: string;
    problem: string;
    solution: string;
  }[];
}
function TroubleShooting({ troubleShooting }: TroubleShootingProps) {
  return (
    <div className="mt-[48px] md:mt-[160px]">
      <h3 className="font-bold text-[28px] md:text-[56px] leading-none">TROUBLE SHOOTING</h3>
      <ul className="flex flex-col mt-[24px] md:mt-[44px] border-t border-black">
        {troubleShooting.map((trouble, index) => (
          <li key={index} className="flex flex-col gap-8 md:gap-10 border-b border-black py-4 md:py-10">
            <h4 className="max-w-max px-3 md:px-4 py-3 bg-black text-white font-bold text-[14px] md:text-[20px] rounded-lg">
              {trouble.title}
            </h4>
            <div className="text-base md:text-[28px] flex flex-col gap-8 md:gap-12">
              <div>
                <span className="font-bold">문제점</span>
                <p className="leading-[26px] md:leading-normal">{trouble.problem}</p>
              </div>
              <div>
                <span className="font-bold">해결</span>
                <p className="leading-[26px] md:leading-normal">{trouble.solution}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TroubleShooting;
