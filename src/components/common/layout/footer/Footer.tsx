import { MAIL_TO } from "@/constants/url";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="bg-black pt-[16px] pb-[20px] md:py-[48px] ">
      <div className="w-full max-[390px] md:max-w-[1440px] px-4 md:px-12 mx-auto">
        <div className="text-blue text-[40px] md:text-[104px] leading-[48px] md:leading-none text-center md:text-left">
          Thank you for Watching.
        </div>
        <div className="md:hidden text-base text-blue mt-[24px] text-center">
          <a href={MAIL_TO}>zomins@naver.com</a>
        </div>
        <FooterNav />
      </div>
    </footer>
  );
}

export default Footer;
