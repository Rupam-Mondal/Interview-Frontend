import { useState } from "react";
import { useGetsampleQuestion } from "@/hooks/useGetsampleQuestions";
import { Loader2 } from "lucide-react";

function QuestionPage() {
    const { isPending, isSuccess, error, mutateAsync } = useGetsampleQuestion();
    const [selectedTech, setSelectedTech] = useState("Mern stack");
    const [questions, setQuestions] = useState([]);

    async function handleClick() {
        try {
            const data = await mutateAsync({ topic: selectedTech });
            console.log("API Response:", data);

            if (data?.questions && Array.isArray(data.questions)) {
                setQuestions(data.questions);
            } else {
                console.error("Invalid data format: questions not found", data);
                setQuestions([]);
            }
        } catch (err) {
            console.error("Error fetching questions:", err);
            setQuestions([]);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold text-center mb-4">Select a Tech Stack</h2>
                <select
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                >
                    <option value="Mern stack">Mern stack</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                </select>
                <button
                    onClick={handleClick}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded flex items-center justify-center"
                    disabled={isPending}
                >
                    {isPending ? <Loader2 className="animate-spin" /> : "Get Questions"}
                </button>
            </div>

            <div className="mt-6 w-full max-w-md">
                {isPending && (
                    <div className="flex justify-center items-center">
                        <Loader2 className="animate-spin text-blue-500 w-10 h-10" />
                    </div>
                )}

                {questions.length > 0 && (
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-3">Suggested Questions</h3>
                        <ul className="space-y-2">
                            {questions.map((q, index) => (
                                <li key={index} className="bg-gray-700 p-3 rounded">{q}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {isSuccess && questions.length === 0 && (
                    <p className="text-red-400 text-center mt-4">No questions found for this topic.</p>
                )}
            </div>
        </div>
    );
}

export default QuestionPage;
