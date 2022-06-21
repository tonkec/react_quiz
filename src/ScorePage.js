import { useLocation } from "react-router-dom";
import { heading1 } from "./Typography";
import {unescape} from 'html-escaper';

const ScorePage = () => {
    const {state} = useLocation();
    const {questions} = state;
    console.log("q",questions)
    const score = questions.filter((question) => question.question.correct_answer.toLowerCase() === question.answer)
    return (
        <>
         <h1 className={`${heading1} font-bold mb-10`}>You scored {score.length} / {questions.length}</h1>
         <ul className="text-left">
            {questions.slice(0, 5).map((question, i) => {
                return <li className="text-ternary" key={i}> <ListIemMark question={question} /> {unescape(question.question.question)}</li>
            })}
         </ul>
        </>
    )
}

const ListIemMark = ({question}) => (
    <span className="text-2xl text-ternary">{question.question.correct_answer.toLowerCase() === question.answer ? "+" : "-"}</span>
)

export default ScorePage;