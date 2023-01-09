import {Routes, Route, Link} from 'react-router-dom';

import { Navbar } from './components//navbar/Navbar';
import { Filter } from './components/navbar/filter/Filter';
import { Mainpage } from './components/mainpage/Mainpage';
import { Notfound } from './components/Notfound';
import './App.css';

function App() {
  return ( 
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='*' element={<Notfound />} /> 
     </Routes>
    </div>
  );
}

export default App;