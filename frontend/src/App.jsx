import { Routes } from "react-router-dom"
import {Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";


function App() {


  return (
   <>
   {/* First => Wwe need the Navbar component, which is static across pages*/}
   <Navbar />
   <Routes>
    {/* Define your routes here */}
    <Route path="/" element={<HomePage />} />
    <Route path="/create-products" element={<CreatePage/>} />
   </Routes>
 
   </>
  );
}
export default App
