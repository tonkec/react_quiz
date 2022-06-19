import './App.css';
import {  BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
function App() {
  return <>
    <Router>
      <Routes />
    </Router>

    {/* {questions && questions.map((q,i) => <p key={i}>{q.question}</p>)} */}
  </>
}

export default App;
