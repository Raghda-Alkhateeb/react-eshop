import "./App.css";
import Header from "./components/NavPar/Header";
// import Header from "./components/NavPar/Header";

// import Home from "./Pages/home/Home";
import { BrowserRouter  } from "react-router-dom";
import Router from "./Router"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Router/>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
