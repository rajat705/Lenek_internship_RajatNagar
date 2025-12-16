import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Notes from "./pages/Notes"

export default function App() {
  return (
    // Container div for centering content
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main content container */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          {/* Navigation links */}
        <nav className="flex justify-center gap-6 mb-6 font-medium">
          <button className="bg-blue-500 text-white m-1 p-1 hover:bg-sky-700"><Link to="/">Home</Link></button>
          <button className="bg-blue-500 text-white m-1 p-1 hover:bg-sky-700"><Link to="/notes">Notes</Link></button>
        </nav>
      {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>

      </div>
    </div>
  )
}
