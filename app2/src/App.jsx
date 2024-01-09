import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";

const App = () => (
  <>
  <Routes>
   <Route path="/" element={<Home />}/> 
 </Routes>
 </>
);

export default App;
