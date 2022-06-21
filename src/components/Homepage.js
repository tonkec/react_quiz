import { useNavigate } from "react-router-dom";
import { heading1, heading2 } from "./helpers/Typography";
const HomePage = () => {
    let navigate = useNavigate();

    const navigateToFirstQuestion = () => {
        navigate("/questions/1")
    }
   return (
       <>       
        <h1 className={`${heading1} mb-20 font-bold`}>Welcome to the Trivia Challenge</h1>
        <h2 className={`${heading2} mb-20`}>You will be presented with 10 True of False questions.</h2>
        <h2 className={`${heading2} mb-20`}> Can you score 100%?</h2>
        <button onClick={navigateToFirstQuestion} className="uppercase">Begin</button>
       </>
    )
    
}
export default HomePage;