
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Home Components/Header";
import Footer from "./Home Components/Footer";

import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Packages from "./Pages/Packages";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();

  const hideHeader = !["/", "/services", "/portfolio"
    // , "/blog"
    , "/packages"].includes(
    location.pathname
  );
  const hideFooter = !["/", "/services"
    , "/portfolio"
  ].includes(
    location.pathname
  );

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/packages" element={<Packages />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;

