import { useParams, useNavigate } from 'react-router-dom'
import {getAllQuestionsFromApi} from "../utils/api";
import {useEffect, useState, useCallback, MouseEvent } from "react";
import {heading1, heading2, button} from "./helpers/Typography";
import {Question} from "../model/Question"
function QuestionPage() {
  let { id } = useParams();
  let nextQuestionId = Number(id);

  let navigate = useNavigate();
  const [allQuestions, setAllQuestions] = useState<Question[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Question[] | any>([])  
  const currentQuestion = allQuestions ? allQuestions[Number(id) - 1] : null;

  const getAllQuestions = useCallback(async () => {
    const questions = await getAllQuestionsFromApi(); 
    setAllQuestions(questions);
    setIsLoaded(true);
  }, [setIsLoaded, setAllQuestions])

  const setQuestionsToState = (userValue: any) => {
    setAnsweredQuestions((prevValue: any) => { 
      return [...prevValue, {question: currentQuestion, answer: userValue}]
    })
  }

  const navigateToNextQuestion = (event:MouseEvent<HTMLButtonElement>) => {
    nextQuestionId = Number(id) + 1;
    let button = event.target as HTMLButtonElement;
    setQuestionsToState(button.value);
    if (allQuestions) {
      if (Number(nextQuestionId) <= allQuestions.length + 1) {
        navigate(`/questions/${Number(nextQuestionId)}`);
      }
    }
  }

  const createMarkup = () => {
   if (currentQuestion) {
    return {__html: currentQuestion.question};
   }
  }

  useEffect(() => {
   if (allQuestions) {
     if (answeredQuestions.length === allQuestions.length) {
      navigate("/score", { state: { questions: answeredQuestions } });
    } 
   }
  }, [nextQuestionId, allQuestions, answeredQuestions, navigate])

  useEffect(() => {
    getAllQuestions()
  }, [getAllQuestions])

  return (
    <>
       {isLoaded ? <>
        {currentQuestion && <h1 className={`${heading1} font-bold`}> {currentQuestion.category}</h1>}
       <div>
        <div className='border-2 border-black p-2 mb-2'>
            {currentQuestion && <h2 className={`${heading2} font-normal break-all`} dangerouslySetInnerHTML={createMarkup()}></h2>}
          </div>
          {allQuestions && <h2 className={`${heading2} font-normal`}> {`${nextQuestionId} of ${allQuestions.length}`}</h2>}
        </div>
        <div className='flex justify-between'>
          <button className={button} value="true" onClick={navigateToNextQuestion}>True</button>
          <button className={button} value="false" onClick={navigateToNextQuestion}>False</button>
        </div>
       </> : <h1>Loading...</h1>}
    </>
  )
}

export default QuestionPage