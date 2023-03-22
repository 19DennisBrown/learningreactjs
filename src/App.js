import Header from './Header';//Importation
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'
import { NavLink } from "react-router-dom"



function App() {
 
  
  return (
    <>
     
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/> } />
          <Route path="/aside" element={<Aside/> } />
        </Routes>
        <Footer/>
      </div>
    
    </>
    
    
  );
}

export default App;
