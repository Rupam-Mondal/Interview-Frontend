import { useEffect, useState } from "react";
import { useGetsampleQuestion } from "@/hooks/useGetsampleQuestions";
import { Loader2 } from "lucide-react";

function QuestionPage() {
    const { isPending, isSuccess, error, mutateAsync } = useGetsampleQuestion();
    const [selectedTech, setSelectedTech] = useState("Mern stack");
    const [data, setData] = useState(null);

    async function handleClick() {
        const response = await mutateAsync({ topic: selectedTech });
        setData(response);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <div className="w-full max-w-md space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-xl font-semibold text-center">Select a Technology</h1>
                <select
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                >
                    <option value="Mern stack">MERN Stack</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                </select>
                <button
                    className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
                    onClick={handleClick}
                    disabled={isPending}
                >
                    {isPending ? <Loader2 className="animate-spin mx-auto" /> : "Fetch Questions"}
                </button>
            </div>
            <div className="mt-6 w-full max-w-md">
                {data?.data?.questions.length > 0 ? (
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-3">Questions:</h2>
                        <ul className="space-y-2">
                            {data.data.questions.map((v, i) => (
                                <li key={i} className="p-2 bg-gray-700 rounded">{v}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default QuestionPage;