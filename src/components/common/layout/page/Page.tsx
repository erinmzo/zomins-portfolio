import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <div className="w-full max-w-[390px] lg:max-w-[1440px] px-4 md:px-12 mx-auto min-h-screen">{children}</div>;
}

export default Page;
