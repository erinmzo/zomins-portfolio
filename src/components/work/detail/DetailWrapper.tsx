"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropsWithChildren, memo } from "react";
function DetailWrapper({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div className="py-[48px]">
      <div className="flex justify-end">
        <button onClick={() => router.back()}>
          <Image src="/btn-close.svg" alt="닫기" width={64} height={64} />
        </button>
      </div>
      {children}
    </div>
  );
}

export default memo(DetailWrapper);
