import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
