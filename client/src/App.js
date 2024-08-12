import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import { BrowserRouter} from 'react-router-dom'

import Home from './pages/screens/Apps/Home'
import List from './pages/screens/Apps/List'
import Scan from './pages/screens/Apps/Scan'
import TaskManager from './pages/screens/Apps/TaskManager';
import CashRegister from './pages/screens/Javascript/CashRegister';
import Palindrome from './pages/screens/Javascript/Palindrome';
import Store from './pages/screens/Apps/Store';
import RomanNumeralConverter from './pages/screens/Javascript/RomanNumeralConverter'
import PhoneValidator from './pages/screens/Javascript/PhoneValidator'
import Pokemon from './pages/screens/Javascript/Pokemon'
import Timestamp from './pages/screens/Microservices/Timestamp'
import HeaderParser from './pages/screens/Microservices/HeaderParser'
import UrlShortener from './pages/screens/Microservices/UrlShortener'
import ExerciseTracker from './pages/screens/Microservices/ExerciseTracker'
import FileMetadata from './pages/screens/Microservices/FileMetadata'

function App() {
  return (
    <div>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            
              <Route exact path="/" element={<Home />} />
              <Route path="my-list" element={<List />} />
              <Route path="scan-item" element={<Scan />} />
              <Route path="task-manager" element={<TaskManager />} />
              {<Route path="store" element={<Store />} />}

              {<Route path="palindrome" element={<Palindrome />} />}
              {<Route path="roman-numeral-converter" element={<RomanNumeralConverter />} />}
              {<Route path="phone-converter" element={<PhoneValidator />} />}
              {<Route path="cash-register" element={<CashRegister />} />}
              {<Route path="poki-wiki" element={<Pokemon />} />}

              {<Route path="timestamp" element={<Timestamp />} />}
              {<Route path="header-parser" element={<HeaderParser />} />}
              {<Route path="url-shortener" element={<UrlShortener />} />}
              {<Route path="exercise-tracker" element={<ExerciseTracker />} />}
              {<Route path="file-metadata" element={<FileMetadata />} />}

          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
