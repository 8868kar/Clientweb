import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Locations from './pages/Locations'
import BookProperty from './pages/BookProperty'
import AboutUs from './pages/AboutUs'
import Inquiry from './pages/Inquiry'

import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Landing />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/book"      element={<BookProperty />} />
        <Route path="/about"     element={<AboutUs />} />
        <Route path="/inquiry"   element={<Inquiry />} />
        <Route path="/admin"     element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
