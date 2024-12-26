import Header from "@/components/common/layout/header/Header";
import { PropsWithChildren } from "react";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HomeLayout;
