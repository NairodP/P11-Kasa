import "/src/css/Pages/Home.css";
import HomeBanner from "../Components/HomeBanner.jsx";
import MainContainer from "../Components/MainContainer.jsx";
import Footer from "../Components/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="body">
        <HomeBanner />
        <MainContainer />
      </div>
      <Footer />
    </>
  );
}
