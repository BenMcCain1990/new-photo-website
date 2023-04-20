//Imports
import './App.css';
import Navbar from './components/navbar';
import Darkmode from './components/darkMode';
import Carousel from './components/carousel';

function App() {
  return (
    <div className='App'>
      <Darkmode />
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
