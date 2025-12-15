import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Notes from "./pages/Notes"

export default function App() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        
        <nav className="flex justify-center gap-6 mb-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>

      </div>
    </div>
  )
}
