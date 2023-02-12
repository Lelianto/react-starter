import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home';
import About from 'src/pages/About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
