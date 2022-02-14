import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
//pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error from "./components/Error";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navbar />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users' element={<Users />} />
          <Route path="userX/:id" element={<User />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
