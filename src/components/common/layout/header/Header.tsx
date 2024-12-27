import Logo from "@/components/common/logo/Logo";
import GlobalNav from "./GlobalNav";

function Header() {
  return (
    <div className="max-w-[1440px] px-[48px] mx-auto fixed">
      <div className="w-full flex justify-between pt-[24px] pb-[20px]">
        <Logo />
        <GlobalNav />
      </div>
    </div>
  );
}

export default Header;
