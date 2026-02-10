import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Vision from './pages/Vision'
import Reports from './pages/Reports'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import ChildWelfareDetail from './pages/services/ChildWelfareDetail'
import EducationalDetail from './pages/services/EducationalDetail'
import EmbroideryDetail from './pages/services/EmbroideryDetail'
import AwarenessDetail from './pages/services/AwarenessDetail'
import FloodReliefDetail from './pages/services/FloodReliefDetail'
import HealthCampDetail from './pages/services/HealthCampDetail'
import WoodCraftDetail from './pages/services/WoodCraftDetail'
import EmpowermentDetail from './pages/services/EmpowermentDetail'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/child-welfare" element={<ChildWelfareDetail />} />
          <Route path="/services/educational" element={<EducationalDetail />} />
          <Route path="/services/embroidery" element={<EmbroideryDetail />} />
          <Route path="/services/awareness" element={<AwarenessDetail />} />
          <Route path="/services/flood-relief" element={<FloodReliefDetail />} />
          <Route path="/services/health-camp" element={<HealthCampDetail />} />
          <Route path="/services/wood-craft" element={<WoodCraftDetail />} />
          <Route path="/services/empowerment" element={<EmpowermentDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
      </Routes>
    </Router>
  )
}