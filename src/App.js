// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Main from './Components/Main.jsx';
import Card from './Components/Card.jsx'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;
