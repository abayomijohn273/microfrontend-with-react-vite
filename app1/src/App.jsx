import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import About from "./About";

const App = () => (
  <>
  <Routes>
   <Route path="/" element={<Home />}/> 
   <Route path="/about" element={<About />}/> 
 </Routes>
 </>
);

export default App;
