import { Route, Routes, useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./components/MainPage"
import Proyect from "./components/Proyect"
import Registration from "./components/Registration"
import Nav from "./components/Nav"
import Form from "./components/Form"
import Policies from "./components/Policies";
import Slider from "./components/Slider";
import Players from './components/Players';
import UpNav from "./components/UpNav";

function App() {
  
const Location = useLocation();

function useNav(){
  const paths = ['/', '/proyect', '/registration', '/policies', '/slider'];
  return paths.includes(Location.pathname)
}


  return (
    <>
   { useNav() ? <UpNav /> : <> </>}
     
  
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/proyect' element={<Proyect />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/policies/' element={<Policies />} />
        <Route path='/slider'
        element={<Slider />} />
        
    
      </Routes>
    </>
  )
}

export default App
