import Link from "next/link";

function MobileNav() {
  return (
    <div className="md:hidden">
      <Link href="/menu">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1" x2="22" y2="1" stroke="black" strokeWidth="2" />
          <line y1="9" x2="22" y2="9" stroke="black" strokeWidth="2" />
          <line y1="17" x2="22" y2="17" stroke="black" strokeWidth="2" />
        </svg>
      </Link>
    </div>
  );
}

export default MobileNav;
