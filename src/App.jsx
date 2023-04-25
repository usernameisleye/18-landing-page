import { BrowserRouter, Routes, Route } from"react-router-dom";

// Components import
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={<Home />}
           />

          {/* Login Route */}
          <Route 
            path="/login"
            element={<Login />}
          />

          {/* Signup Route */}
          <Route 
            path="/signup"
            element={<Signup />}
          />

          {/* 404 Route */}
          <Route 
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
