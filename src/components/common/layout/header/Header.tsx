"use client";
import Logo from "@/components/common/logo/Logo";
import { usePathname } from "next/navigation";
import GlobalNav from "./GlobalNav";

function Header() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/work") {
    return (
      <div className="w-full fixed left-0 right-0 top-0 z-10">
        <div className="w-full min-w-[340px] max-w-[390px] md:max-w-[1440px] px-4 md:px-12 md:mx-auto flex justify-between pt-[24px] pb-[20px]">
          <Logo />
          <GlobalNav />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full max-w-[390px] md:max-w-[1440px] px-4 md:px-12 mx-auto">
      <div className="w-full flex justify-between pt-[24px] pb-[20px]">
        <Logo />
        <GlobalNav />
      </div>
    </div>
  );
}

export default Header;
