import './App.css';
import {  BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import LayoutComponent from './LayouComponent';
function App() {
  return <LayoutComponent>
    <Router>
      <Routes />
    </Router>
  </LayoutComponent>
    
}

export default App;
