import Logo from "@/components/common/logo/Logo";
import GlobalNav from "./GlobalNav";

function Header() {
  return (
    <div className="w-full max-w-[1440px] px-[48px] mx-auto fixed pt-[24px] pb-[20px] flex justify-between">
      <Logo />
      <GlobalNav />
    </div>
  );
}

export default Header;
