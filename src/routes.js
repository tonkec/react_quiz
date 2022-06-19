import { Routes, Route } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import QuestionPageLayout from "./QuestionPageLayout"
const QuizRoutes = () => {
    return (
        <Routes>
        <Route path="questions" element={<QuestionPageLayout />}>
          <Route path=":id" element={<QuestionPage />} />
        </Route>
      </Routes>
    );
  };
  
  export default QuizRoutes;