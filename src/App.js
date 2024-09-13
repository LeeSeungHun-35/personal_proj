import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
