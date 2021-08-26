import axios from "axios";
import { IQuestion } from "../Pages/GamePage";

export const getQuestions = async () => {
    const response = await axios.get('Question/get');
    return response.data;
}