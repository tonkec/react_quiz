import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {getAllQuestionsFromApi} from "./utils/api";
import {useEffect, useState, useCallback} from "react";
import {heading1, heading2, button} from "./Typography";
import {unescape} from 'html-escaper';

function QuestionPage() {
  let { id } = useParams();
  let nextQuestionId = id;

  let navigate = useNavigate();
  const [allQuestions, setAllQuestions] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([])  
  const currentQuestion = allQuestions ? allQuestions[Number(id) - 1] : null;

  const getAllQuestions = useCallback(async () => {
    const questions = await getAllQuestionsFromApi(); 
    setAllQuestions(questions);
    setIsLoaded(true);
  }, [setIsLoaded])

  const setQuestionsToState = (userValue) => {
    setAnsweredQuestions((prevValue) => {
      return [...prevValue, {question: currentQuestion, answer: userValue}]
    })
  }

  const navigateToNextQuestion = (e) => {
    nextQuestionId = Number(id) + 1;
    setQuestionsToState(e.target.value);
    if (Number(nextQuestionId) <= allQuestions.length + 1) {
      navigate(`/questions/${Number(nextQuestionId)}`);
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
          {currentQuestion && <h2 className={`${heading2} font-normal break-all`}>{unescape(currentQuestion.question)}</h2>}
        </div>
        {allQuestions && <h2 className={`${heading2} font-normal`}> {`${nextQuestionId} of ${allQuestions.length}`}</h2>}
       </div>
        <div className='flex justify-between'>
          <button className={button} value={true} onClick={navigateToNextQuestion}>True</button>
          <button className={button} value={false} onClick={navigateToNextQuestion}>False</button>
        </div>
       </> : <h1>Loading...</h1>}
    </>
  )
}

export default QuestionPage