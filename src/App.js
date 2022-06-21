import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import LayoutComponent from './components/helpers/LayouComponent';
function App() {
  return <LayoutComponent>
    <Router>
      <Routes />
    </Router>
  </LayoutComponent>
    
}

export default App;
