
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Hero from './Components/Hero';

 


function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Hero />
        <Routes>        
          <Route path='/' element ={<Home />} />                           
          {/* <Route path='/category/:category' element={ <Category />} />           */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
