import { NavBar } from "./components/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <section className="App-content"> 
        <BrowserRouter>
          <Routes>
            <Route path="/*" element = { <NavBar /> } /> 
            {/* <Route path="/:keyword"  element = { <ListOfGifs /> } /> */}
          </Routes>
        </BrowserRouter> 
      </section>
    </div>
  );
}

export default App;
