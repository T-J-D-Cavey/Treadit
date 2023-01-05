import {Routes, Route, Link} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Mainpage } from './components/mainpage/Mainpage';
import { Notfound } from './components/Notfound';
import './App.css';

function App() {
  return ( 
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Mainpage />} />
          {/* Need to create additional routes for category names, 
          which when selected will send a dispatch, change the posts state, 
          and change the URL, causing the componant to render */}
          <Route path='*' element={<Notfound />} /> 
       </Routes>
    </div>


  );
}

export default App;
