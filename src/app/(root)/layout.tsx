import Footer from "@/components/common/layout/footer/Footer";
import Header from "@/components/common/layout/header/Header";
import { PropsWithChildren } from "react";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
