import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Home from './page/Home';
import Sym from './page/Sym';
import Test from './page/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sym" element={<Sym />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
