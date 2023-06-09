import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
import Error from "./components/Error.jsx"
import Index from "./components/Index.jsx"
import New from "./components/New.jsx"
import Show from "./components/Show.jsx"
import Edit from "./components/Edit.jsx"
import Nav from "./components/Nav.jsx"

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="*" element={<Error/>}/> 
      <Route path="/" element={<Home/>}/>
      <Route path="/snacks" element={<Index/>}/>
      <Route path="/snacks/new" element={<New/>}/>
      <Route path="/snacks/:id" element={<Show/>}/>
      <Route path="/snacks/:id/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
