import { useLocation, useNavigate } from "react-router-dom";
import { heading1 } from "./Typography";

const ScorePage = () => {
    let navigate = useNavigate();
    const {state} = useLocation();
    const {questions} = state;
    const score = questions.filter((question) => question.question.correct_answer.toLowerCase() === question.answer);

    const navigateToHomePage = () => {
        navigate("/")
    }

    const createMarkup = (question) => {
        return {__html: question};
      }
    return (
        <>
         <h1 className={`${heading1} font-bold mb-10`}>You scored {score.length} / {questions.length}</h1>
         <ul className="text-left">
            {questions.slice(0, 5).map((question, i) => {
                return <li className="text-ternary" key={i}>
                    <ListIemMark question={question} /> 
                    <span dangerouslySetInnerHTML={createMarkup(question.question.question)}></span>
                </li>
            })}
         </ul>
         <button className="mt-20" onClick={navigateToHomePage}>Play again?</button>
        </>
    )
}

const ListIemMark = ({question}) => (
    <span className="text-2xl text-ternary mr-2">{question.question.correct_answer.toLowerCase() === question.answer ? "+" : "-"}</span>
)

export default ScorePage;