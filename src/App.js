import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import LayoutComponent from './components/helpers/LayouComponent';
const App = () => (
   <LayoutComponent>
    <Router>
      <Routes />
    </Router>
  </LayoutComponent>
)
export default App;
