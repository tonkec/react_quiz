import { Routes, Route } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import HomePage from "./Homepage";
const QuizRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/question/:id" element={<QuestionPage/>} />
        </Routes>
    );
  };
  
  export default QuizRoutes;