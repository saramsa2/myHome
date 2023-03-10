import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Portfolios from './pages/Portfolios';
import Travel from './pages/Travel';
import Profile from './pages/Profile';

function App() {
  return (
    // <Navigation>
    //   <Routes>
    //     <Route path='/' element={<Portfolios />}></Route>
    //   </Routes>
    // </Navigation>
    <div className="App">
      <Navigation>
        <Routes>
          <Route path='/' element={<Portfolios/>} />
          <Route path='/Portfolio' element={<Portfolios />} />
          <Route path='/Travel' element={<Travel/>} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
        </Navigation>
    </div>
  );
}

export default App;
