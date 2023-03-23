import Header from './Header';//Importation
import Main from './Main';
import Aside from './Aside';
import Navs from './Navs';
import User from './User';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'




function App() {
  
  
  return (
    
    
    
      <div className="App">
       

        <Header/>
       
        <Routes path='/navs' element={<Navs/>}>
          <Route path="/" element={<Main/> } />
          <Route path="/aside" element={<Aside/> } />
          <Route path="/user" element={<User/> } />
        </Routes>
        <Footer/>
      </div>
    
   
    
    
  );
}

export default App;
