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
import BottomNav from "./components/BottomNav";
import Card from "./components/Card";
import React, {useState, useEffect} from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
function App() {

const location = useLocation();

function useNav(){
  const paths = ['/', '/proyect', '/registration', '/policies', '/slider'];
  return paths.includes(location.pathname)
}
function useFooter(){
  const paths2 = ['/', '/proyect', '/registration', '/slider'];
  return paths2.includes(location.pathname)
}

const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    dataFetch();
  }, []);


  return  (
    isLoading ? <Loader /> : (

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

      {useFooter() ? <Footer /> : <></>}

    </>
    )
  )
}

export default App
