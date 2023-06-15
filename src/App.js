import Header from './Header';//Importation
import Main from './Main';
import Aside from './Aside';
import Navs from './Navs';
import User from './User';
import Pages from './Pages';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'




function App() {
  
  
  return (
    
    
    
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/> } />
          <Route path="/aside" element={<Aside/> } />
          <Route path="/user" element={<User/> } />
          <Route path="/pages" element={<Pages/> } />
        </Routes>
        <Footer/>
      </div>
    
   
    
    
  );
}

export default App;
