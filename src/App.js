import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Details from './components/detailes/Details';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
          </Routes>

      </Router>

    </div>
  );
}

export default App;
