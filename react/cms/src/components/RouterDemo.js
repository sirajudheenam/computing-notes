import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location
} from "./pages";

import '../stylesheets/style.css';

export function RouterDemo() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />} />
            <Route path="history" element={<CompanyHistory />} />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="/events" element={<Events />}>Events</Route>
          <Route path="/contact" element={<Contact />}>Contact</Route>
          <Route path="*" element={<Whoops404 />}>Error Page</Route>
        </Routes>
      </Router>
    </div>
  )
}
