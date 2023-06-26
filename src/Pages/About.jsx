import "/src/css/Pages/About.css";
import AboutBanner from "../Components/AboutBanner.jsx";
import Footer from "../Components/Footer.jsx";
import Dropdown from "../Components/Dropdown.jsx";
import rules from "/src/assets/data/rules.json";

export default function About() {
  return (
    <>
      <div className="body">
        <AboutBanner />
        {rules.map((rule) => (
          <Dropdown key={rule.id} title={rule.title} content={rule.content} />
        ))}
      </div>
      <Footer />
    </>
  );
}
