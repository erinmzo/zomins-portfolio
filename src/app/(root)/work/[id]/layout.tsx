"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function DetailLayout({ children }: PropsWithChildren) {
  const [isScroll, setIsScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="py-[34px] md:py-[100px]">
      {children}
      {isScroll && (
        <>
          <div className="hidden md:block fixed bottom-12 right-12">
            <button onClick={scrollToTop}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="black" fillOpacity="0.4" />
                <path d="M19 38L32 25L45 38" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="md:hidden fixed bottom-4 right-4">
            <button onClick={scrollToTop}>
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="black" fillOpacity="0.4" />
                <path d="M19 38L32 25L45 38" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailLayout;
