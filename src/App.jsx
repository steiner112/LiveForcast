import './App.css';
import "./index.css";
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home.jsx';
import './componentCss/Watch.css';
import Navbar from './component/Navbar.jsx';
import "./componentCss/Navbar.css"
import Footer from './component/Footer.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import Weather from './pages/Weather.jsx';

function App() {
  return (
   <div>
   <BrowserRouter> 
   <Navbar/>
   <Routes>
   <Route path='/Weather' element={<Weather/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/*' element={<Error/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
   </div>
   
  )
}

export default App;
