import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Introduction from "../pages/Introduction";
import Gurus from "../pages/Gurus";
import Beliefs from "../pages/Beliefs";
import Nitnem from "../pages/Nitnem";
import Shaheeds from "../pages/Shaheeds";
import SikhGallery from "../pages/SikhGallery";
import GurudwaraGallery from "../pages/GurudwaraGallery";
import Sakhiyan from "../pages/Sakhiyan";
import Purpose from "../pages/purpose";
import SpiritualSongs from "../data/SpiritualSongs";
import OtherProjects from "../pages/otherProjects";

export default function AppRoutes({ refreshKey }) {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname + refreshKey}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/gurus" element={<Gurus />} />
      <Route path="/sakhiyan" element={<Sakhiyan />} />
      <Route path="/gurudwara" element={<GurudwaraGallery />} />
      <Route path="/beliefs" element={<Beliefs />} />
      <Route path="/nitnem" element={<Nitnem />} />
      <Route path="/gallery" element={<SikhGallery />} />
      <Route path="/shaheeds" element={<Shaheeds />} />
      <Route path="/nitnem/SpiritualSongs" element={<SpiritualSongs />} />
      <Route path="/purpose" element={<Purpose />} />
      <Route path="/OtherProjects" element={<OtherProjects />} />
    </Routes>
  );
}
