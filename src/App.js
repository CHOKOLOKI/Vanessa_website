import './App.css';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='container' id='App'>
      <div className='navbar bg-body-tertiary' id='navbar'>
        <Navbar />
        <div className='table-container'>
          <table id='table' style={{ width: '100%', height: '60vh', border: '1px solid black' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
