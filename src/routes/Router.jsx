import { Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Profile from "../pages/Profile";
import HelloWorld from "../pages/HelloWorld";

const Router = () => {
  return (
    <>
      <NavBar/>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="hello-world" element={<HelloWorld />}/>
        </Routes>
      </div>
    </>
  );
};

export default Router;