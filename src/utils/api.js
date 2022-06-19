import axios from "axios";

export const getAllQuestionsFromApi = async () => {    
    try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
        const questions = await response.data;
        if ("results" in questions) {
            const { results } = questions;
            return results;
        }
    } catch (e) {
        console.log(e)
    }
   
}