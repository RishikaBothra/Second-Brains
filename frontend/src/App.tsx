import Dashboard from "./components/pages/dashboard"
import { Signin } from "./components/pages/signin"
import { Signup } from "./components/pages/signup"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
