import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
// import Services from "./Pages/Home/Services/Services";
import Blogs from "./Pages/Blogs/Blogs";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Login from "./Pages/Login/Login/Login";
// import SignUp from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import CheackOut from "./Pages/CheackOut/CheackOut";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Services from "./Pages/Home/Services/Services";

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
        <Route
          path="/cheackout"
          element={
            <RequireAuth>
              <CheackOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* {
    "id": "625afbdf73a008229e567ad4",
    "price": "$50",
    "picture": "https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148163817.jpg?size=626&ext=jpg&uid=R67494978&ga=GA1.2.986424658.1648222770",
    "name": "Math",
    "description": "Voluptate velit ut eu non labore deserunt sunt. Fugiat nostrud dolor qui ullamco aute Lorem do magna irure nulla..\r\n"
  },
  {
    "id": "625afbdf73a008229e567ad4",
    "price": "$50",
    "picture": "https://as2.ftcdn.net/v2/jpg/02/06/49/53/1000_F_206495393_52Ydcd64v5sGYRXuqrAO6s3iAf4k8ld4.jpg",
    "name": "Math",
    "description": "Voluptate velit ut eu non labore deserunt sunt. Fugiat nostrud dolor qui ullamco aute Lorem do magna irure nulla..\r\n"
  },
  {
    "id": "625afbdf73a008229e567ad4",
    "price": "$50",
    "picture": "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&uid=R67494978&ga=GA1.2.986424658.1648222770",
    "name": "Web Development",
    "description": "Voluptate velit ut eu non labore deserunt sunt. Fugiat nostrud dolor qui ullamco aute Lorem do magna irure nulla..\r\n"
  } */}
      {/* https://img.freepik.com/free-vector/physics-formulas-drawn-by-hand-black-chalkboard-background_101002-133.jpg?w=740 */}
      {/* {/* https://t3.ftcdn.net/jpg/01/64/92/16/240_F_164921619_vgjzmQhbjb8uSA4x5jkqi5X9WY404kjq.jpg */}{" "}
      {/* https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148163817.jpg?size=626&ext=jpg&uid=R67494978&ga=GA1.2.986424658.1648222770 */}
    </div>
  );
}

export default App;
