import type { LayoutPageProps } from "@/types";
import { Footer, Header } from "../components";

const Layout = (props: LayoutPageProps) => {
  const { children } = props;

  return (
    <>
      <Header />

      <main className="w-full">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
