import Image from "next/image";

function MobileHome() {
  return (
    <div className="md:hidden pt-[130px] pb-[24px]">
      <h2 className="text-[36px] sm:[52px] flex flex-col justify-center">
        <div className="flex flex-col gap-3">
          <span className="max-w-max py-1 px-3 rounded-[12px] bg-blue text-white font-medium">FRONTEND</span>
          <span className="max-w-max py-1 px-3 rounded-[12px] bg-blue text-white font-medium">DEVELOPER</span>
        </div>
        <div className="mt-[44px] flex flex-col gap-3">
          <span className="max-w-max py-1 px-3 rounded-[12px] bg-black text-white font-medium">MINSOO CHO</span>
          <span className="max-w-max py-1 px-3 rounded-[12px] bg-black text-white font-medium">PORTPOLIO</span>
        </div>
      </h2>
      <div className="flex flex-col justify-center items-center mt-[150px] animate-bounce">
        <span className="font-medium text-[16px]">SCROLL</span>
        <span className="mt-1">
          <Image src="/arrow.svg" alt="화살표" width={20} height={12} />
        </span>
      </div>
    </div>
  );
}

export default MobileHome;
