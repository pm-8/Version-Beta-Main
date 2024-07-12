import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Schedule from "./Components/Schedule";
import Prizes from "./Components/Prizes";
import Sponsors from "./Components/Sponsors";
import Gallery from "./Components/Gallery";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import Line from "./Components/Nested Components/Line/Line";
import Loader from "./Components/Nested Components/Loader/Loader";
import "./App.css";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, [6290]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-[100%] app">
            <Navbar />

            <Hero />
            <Line />

            <About />
            <Line />

            <Schedule />
            <Line />

            <Prizes />
            <Line />

            <Gallery />
            <Line />

            <Sponsors />
            <Line />

            <FAQs />
            <Line />

            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
