import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="bg-black py-[48px]">
      <div className="w-full max-w-[1440px] px-[48px] mx-auto">
        <div className="text-blue text-[104px] leading-none">Thank you for Whatching.</div>
        <FooterNav />
      </div>
    </footer>
  );
}

export default Footer;
