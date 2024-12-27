import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <div className="max-w-[390px] md:max-w-[1440px] px-4 md:px-12 mx-auto min-h-screen">{children}</div>;
}

export default Page;
