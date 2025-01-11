import Image from "next/image";
import Page from "../common/layout/page/Page";
import MobileHome from "./MobileHome";

function Home() {
  return (
    <Page>
      <div className="hidden md:flex flex-col items-start justify-center min-h-screen w-full relative -translate-y-[20px]">
        <div className="flex flex-col items-center">
          <h2 className="text-7xl xl:text-8xl 2xl:text-[132px] flex flex-col">
            <div>
              <span className="inline-block py-3 px-8 rounded-[28px] bg-blue text-white">FRONTEND DEVELOPER</span>
            </div>
            <div className="mt-[80px] lg:mt-22 flex flex-col items-start">
              <span className="inline-block py-3 px-8 rounded-[28px] bg-black text-white">MINSOO CHO</span>
              <span className="inline-block mt-8 py-3 px-8 rounded-[28px] bg-black text-white">PORTPOLIO</span>
            </div>
          </h2>

          <div className="absolute inset-x-0 bottom-8 flex flex-col items-center animate-bounce">
            <span className="font-medium text-base">SCROLL</span>
            <span className="mt-1">
              <Image src="/arrow.svg" alt="화살표" width={20} height={12} />
            </span>
          </div>
        </div>
      </div>
      <MobileHome />
    </Page>
  );
}

export default Home;
