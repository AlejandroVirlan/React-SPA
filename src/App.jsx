import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import HelloWorld from "./pages/HelloWorld";
import Profile from "./pages/Profile";

const App = () => {

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
}

export default App;
