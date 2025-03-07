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