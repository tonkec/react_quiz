import React from 'react'
import { useParams } from 'react-router-dom'
import {getAllQuestionsFromApi} from "./utils/api";
import {useEffect, useState} from "react";
function QuestionPage() {
  const [singleQuestion, setSingleQuestion] = useState(null);
  const [allQuestions, setAllQuestions] = useState(null)
  const { id } = useParams();

  const getAllQuestions = async () => {
    const questions = await getAllQuestionsFromApi();
    setAllQuestions(questions);
    const currentQuestion =  questions[id - 1];
    setSingleQuestion(currentQuestion)
  }

  useEffect(() => {
    getAllQuestions()
  }, [])

  return (
    <div>
        {singleQuestion && <h1> {singleQuestion.question}</h1>}
        {allQuestions && `${id} of ${allQuestions.length}`}
    </div>
  )
}

export default QuestionPage