import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./Pages/Home"
import About from "./Pages/About"
import TestimonialsPage from "./Pages/TestimonialsPage"
import VehicleModels from "./Pages/VehicleModels"
import Contact from "./Pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<VehicleModels />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
