import './App.css';
import Logotable from './components/Logotable';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='container' id='App'>
      <div className='navbar bg-body-tertiary' id='navbar'>
        <Navbar />
      </div>
      <div className='table-container' id='table'>
        <Logotable />
      </div>
        <div class="button-container">
          <button class="Book">Book Now</button>
          <button class="Info">Information</button>
        </div>
      </div>
  );
}

export default App;
