import AxiosInstance from "@/utils/AxiosInstance";

export async function askOurAi(QuestionObject){
    const token = localStorage.getItem('token');
    
    try {
        const response = await AxiosInstance.get('/Interview/user/askourai' , {
            headers: {
                'x-access-token': token
            },
            params:QuestionObject
        });
        return response.data;
    } catch (error) {
        console.log("Error in askOurAi", error);
        return null;
    }
}

export async function GetIntervirewQuestions(InterviewObject){
    const token = localStorage.getItem('token');
    
    try {
        const response = await AxiosInstance.get('/interview/getQuestions' , {
            headers: {
                'x-access-token': token
            },
            params:InterviewObject
        });
        return response.data;
    } catch (error) {
        console.log("Error in GetIntervirewQuestions", error);
        return null;
    }
}