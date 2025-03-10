import { Getsuggestions } from "@/Apis/Questions";
import { useMutation } from "@tanstack/react-query";

export function useGetsampleQuestion(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: Getsuggestions,
        onSuccess:(data) => {
            console.log(data);
            return data;
        },
        onError:(data) => {
            console.log(data);
            return data;
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        mutateAsync
    }
}