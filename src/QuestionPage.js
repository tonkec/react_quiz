import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {getAllQuestionsFromApi} from "./utils/api";
import {useEffect, useState} from "react";
function QuestionPage() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [singleQuestion, setSingleQuestion] = useState(null);
  const [allQuestions, setAllQuestions] = useState(null);


  const getAllQuestions = async () => {
    const questions = await getAllQuestionsFromApi();
    setAllQuestions(questions);
    setCurrentQuestion(questions)
  }

  const setCurrentQuestion = (questions) => {
    const currentQuestion =  questions[id - 1];
    setSingleQuestion(currentQuestion)
  }

  const navigateToNextQuestion = () => {
    id++
    if (Number(id) <= allQuestions.length) {
      setCurrentQuestion(allQuestions)
      navigate(`/questions/${Number(id)}`, {replace: true})
    }
  }

  useEffect(() => {
    getAllQuestions()
  }, [])

  return (
    <div>
        {singleQuestion && <h1> {singleQuestion.question}</h1>}
        {allQuestions && `${id} of ${allQuestions.length}`}
        <button onClick={navigateToNextQuestion}>True</button>
    </div>
  )
}

export default QuestionPage