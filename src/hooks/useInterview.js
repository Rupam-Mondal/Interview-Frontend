import { GetIntervirewQuestions } from "@/Apis/AI";
import { useQuery } from "@tanstack/react-query";

export function useInterview(object){
    const {data , isSuccess , isLoading , isError , error} = useQuery({
        queryKey: ['Interview'],
        queryFn: () => GetIntervirewQuestions(object),
    });

    return {data , isSuccess , isLoading , isError , error};
}