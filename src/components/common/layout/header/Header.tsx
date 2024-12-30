"use client";
import Logo from "@/components/common/logo/Logo";
import { usePathname, useRouter } from "next/navigation";
import GlobalNav from "./GlobalNav";
import MobileNav from "./MobileNav";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/" || pathname === "/work") {
    return (
      <div className="w-full fixed left-0 right-0 top-0 z-10">
        <div className="w-full min-w-[340px] max-w-[390px] md:max-w-[1440px] px-4 md:px-12 md:mx-auto flex justify-between pt-[24px] pb-[20px] items-center">
          <Logo />
          <GlobalNav />
          <MobileNav />
        </div>
      </div>
    );
  }

  if (pathname === "/menu") {
    return (
      <div className="w-full fixed left-0 right-0 top-0 z-10">
        <div className="w-full min-w-[340px] max-w-[390px] md:max-w-[1440px] px-4 md:px-12 md:mx-auto flex justify-end pt-[24px] pb-[20px] items-center">
          <button onClick={() => router.back()}>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line
                y1="-1"
                x2="28.2841"
                y2="-1"
                transform="matrix(0.707103 0.70711 -0.707103 0.70711 2 2)"
                stroke="black"
                strokeWidth="2"
              />
              <line
                y1="-1"
                x2="28.2841"
                y2="-1"
                transform="matrix(-0.707103 0.70711 0.707103 0.70711 22 2)"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[390px] md:max-w-[1440px] px-4 md:px-12 mx-auto">
      <div className="w-full flex justify-between pt-[24px] pb-[20px] items-center">
        <Logo />
        <GlobalNav />
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
