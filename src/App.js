import logo from './logo.svg';
import './App.css';

import Home from "./component/Home/Home"
import Flker from './component/Flkr/Flker';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/flk" element={<Flker/>}/>
        </Routes>
      </Router>
      {/* < Home/> */}
     

    </div>
  );
}

export default App;
