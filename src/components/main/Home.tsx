import Image from "next/image";
import Page from "../common/layout/page/Page";
import MobileHome from "./MobileHome";

function Home() {
  return (
    <Page>
      <div className="hidden md:block pt-[140px] pb-[40px]">
        <h2 className="text-[96px] flex flex-col justify-center">
          <div>
            <span className="inline-block py-4 px-10 rounded-[28px] bg-blue text-white">FRONTEND DEVELOPER</span>
          </div>
          <div className="mt-[96px] flex flex-col items-start">
            <span className="inline-block py-4 px-10 rounded-[28px] bg-black text-white">MINSOO CHO</span>
            <span className="inline-block mt-8 py-4 px-10 rounded-[28px] bg-black text-white">PORTPOLIO</span>
          </div>
        </h2>
        <div className="flex flex-col justify-center items-center mt-[176px] md:mt-[158px] animate-bounce">
          <span className="font-medium text-[24px]">SCROLL</span>
          <span>
            <Image src="/arrow.svg" alt="화살표" width={34} height={20} />
          </span>
        </div>
      </div>
      <MobileHome />
    </Page>
  );
}

export default Home;
