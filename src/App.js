import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigations from './Components/Navigations';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Navigations/>
      </Router>
      
    </div>
  );
}

export default App;
