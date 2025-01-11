import Header from "@/components/common/layout/header/Header";
import { PropsWithChildren } from "react";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default HomeLayout;
