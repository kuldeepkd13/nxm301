import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import Update from "./Pages/Update/Update";

// ! anchor tags shouldn't be used
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Todo App</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/add">Add Todos</Link>
        </div>
        <Routes>
          {/* Show all todos */}
          <Route path="/" element={<Home />} />
          {/* Add a new Todo  */}
          <Route path="/add" element={<Add />} />
          {/* Update a Todo  */}
          <Route path="/update/:todoID" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
