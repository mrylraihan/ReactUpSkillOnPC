import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import More from './components/More';
import About from './components/About';
import Navbar from './components/Navbar';
import Nested1 from './components/Nested/Nested1';
import Nested2 from './components/Nested/Nested2';
import Nested3 from './components/Nested/Nested3';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}>
          <Route path='/p1' element={<Page1/>}/>
          <Route path='/p2' element={<Page2/>}/>
          <Route path='/p3' element={<Page3/>}>
          <Route path='nested/1' element={<Nested1/>}/>
          <Route path='nested/2' element={<Nested2/>}/>
          <Route path='nested/3' element={<Nested3/>}/>
          </Route>
      </Route>
      <Route path='/more' element={<More/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
