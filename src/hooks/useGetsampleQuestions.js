import { Getsuggestions } from "@/Apis/Questions";
import { useMutation } from "@tanstack/react-query";

export function useGetsampleQuestion(){
    const { data, isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: Getsuggestions,
        onSuccess:(response) => {
            console.log(response);
            return response;
        },
        onError:(response) => {
            console.log(response);
            return response;
        }
    });

    return {
        data,
        isPending,
        isSuccess,
        error,
        mutateAsync
    }
}