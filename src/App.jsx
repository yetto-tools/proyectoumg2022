import "./App.css";
import { Home } from "./components/home/index";
import { About } from "./components/about/index";
import Contact from "./components/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
    // <>
    //   <h1 className="text-4xl font-bold">Bienvenidos Proyecto UMG 2022</h1>
    //   <Main className="bg-white" />
    // </>
  );
}

export default App;
