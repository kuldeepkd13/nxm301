import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
      </div>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/about' element={<h1>About page</h1>}/>
        <Route path='/service' element={<h1>Service page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
