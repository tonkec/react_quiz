import axios from "axios";

const BASE_URI = process.env.REACT_APP_API_URL;
export const getAllQuestionsFromApi = async () => {    
    try {
        const response = await axios.get(`${BASE_URI}?amount=10&difficulty=hard&type=boolean`)
        const questions = await response.data;
        if ("results" in questions) {
            const { results } = questions;
            return results;
        }
    } catch (e) {
        console.log(e)
    }
   
}