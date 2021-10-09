import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

const Layout = ({ children, page, scrollValue }) => {
  return (
    <div className="layout">
      <Header />
      <ProgressBar scrollValue={scrollValue} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
