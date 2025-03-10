import { useGetsampleQuestion } from "@/hooks/useGetsampleQuestions";

function Questionpage(){
    const { isPending, isSuccess, error, mutateAsync } = useGetsampleQuestion();
    async function handleclick() {
        const data = await mutateAsync({
            topic: "Mern stack"
        });
        console.log(data);
    }
    return (
        <>
            <div>
                This is the Question Bank Page
            </div>
            <button onClick={async () => {
                await handleclick();
            }}>click me</button>
        </>
    )
}

export default Questionpage;