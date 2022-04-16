import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Blogs from "./Pages/Blogs/Blogs";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Login from "./Pages/Login/Login/Login";
// import SignUp from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
