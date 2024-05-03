import Header from "./Header";
import TabBar from "./TabBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div style={{ height: "53px" }}></div>
      <div className="container-base">{children}</div>
      <div style={{ height: "80px" }}></div>
      <TabBar />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
