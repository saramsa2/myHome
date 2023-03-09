import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Portfolios from './pages/Portfolios';
import Travel from './pages/Travel';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path='/' element={<Portfolios/>} />
          <Route path='Travel' element={< Travel/>} />
        </Routes>      
    </div>
  );
}

export default App;
