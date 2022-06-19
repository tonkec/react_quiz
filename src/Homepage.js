import { useNavigate } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();

    const navigateToFirstQuestion = () => {
        navigate("/question/1")
    }
   return (
        <div>
            <h1>Welcome to the Trivia Challenge</h1>
            <button onClick={navigateToFirstQuestion}>Begin</button>
        </div>
    )
    
}
export default HomePage;