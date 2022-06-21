import { Routes, Route } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import QuestionPageLayout from "./QuestionPageLayout";
import ScorePage from "./ScorePage";
import HomePage from "./Homepage"
const QuizRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="questions" element={<QuestionPageLayout />}>
            <Route path=":id" element={<QuestionPage />} />
          </Route>
          <Route path="score" element={<ScorePage />} />
      </Routes>
    );
  };
  
  export default QuizRoutes;