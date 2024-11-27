import { Footer, Header } from "./components";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />

      <main className="w-full">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
