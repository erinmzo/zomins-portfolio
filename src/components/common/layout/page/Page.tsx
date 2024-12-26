import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <div className="max-w-[1440px] px-[48px] mx-auto min-h-screen">{children}</div>;
}

export default Page;
