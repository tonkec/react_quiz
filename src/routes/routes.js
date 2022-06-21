import { Routes, Route } from "react-router-dom";
import QuestionPage from "./../components/QuestionPage";
import QuestionPageLayout from "./../components/QuestionPageLayout";
import ScorePage from "./../components/ScorePage";
import HomePage from "./../components/Homepage"
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