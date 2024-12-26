import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, memo } from "react";
function DetailWrapper({ children }: PropsWithChildren) {
  return (
    <div className="py-[48px]">
      <div className="flex justify-end">
        <Link href="/work">
          <Image src="/btn-close.svg" alt="닫기" width={64} height={64} />
        </Link>
      </div>
      {children}
    </div>
  );
}

export default memo(DetailWrapper);
