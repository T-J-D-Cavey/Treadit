import {Routes, Route, Link} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import { Homepage } from './components/Homepage';
import './App.css';

function App() {
  return ( 
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* Need to create additional routes for category names, 
          which when selected will send a dispatch, change the posts state, 
          and change the URL, causing the componant to render */}
       </Routes>
    </div>


  );
}

export default App;
