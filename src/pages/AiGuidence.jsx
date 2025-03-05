import { useState } from "react";
import { FaRobot } from "react-icons/fa";

function AiGuidance() {
    const [techStack, setTechStack] = useState("Select Tech Stack");
    const [response, setResponse] = useState("");

    const predefinedQuestions = [
        "Roadmap for this interview",
        "How should I behave in an interview?",
        "Main focus in an interview",
        "How to answer difficult questions?",
        "Common mistakes in interviews"
    ];

    const handleAsk = (query) => {
        setResponse(`AI: This is a smart answer for "${query}" in ${techStack}`);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            {/* Tech Stack Selection */}
            <section className="text-center py-10 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-[#38BDF8]">AI Guidance</h1>
                <p className="mt-3 text-lg text-gray-400">Get AI-driven interview insights</p>

                <div className="mt-6">
                    <label className="block text-lg font-semibold mb-2">Choose Your Tech Stack</label>
                    <select
                        className="px-4 py-2 bg-gray-800 text-white border border-[#38BDF8] rounded-lg w-full"
                        onChange={(e) => setTechStack(e.target.value)}
                    >
                        <option>Select Tech Stack</option>
                        <option>Frontend (React, Angular, Vue)</option>
                        <option>Backend (Node.js, Django, Flask)</option>
                        <option>Data Science & AI</option>
                        <option>Cybersecurity</option>
                        <option>Others</option>
                    </select>
                </div>
            </section>

            {/* AI Chat Section */}
            <section className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-[#38BDF8] flex items-center gap-2">
                    <FaRobot className="text-[#38BDF8]" /> Select a Question
                </h2>

                {/* Predefined Questions */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {predefinedQuestions.map((q, index) => (
                        <button
                            key={index}
                            className="bg-[#2ca4cf] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#38BDF8] transition-all"
                            onClick={() => handleAsk(q)}
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* AI Response */}
                {response && (
                    <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
                        <p className="text-gray-300">{response}</p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default AiGuidance;
