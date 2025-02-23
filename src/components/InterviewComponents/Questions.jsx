import { Mic, Mic2Icon, Send } from "lucide-react";
import React, { useState } from "react";

const Questions = ({ question }) => {
  const [answer, setAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState(null);
  const [speaking, setSpeaking] = useState(false);

 const handleSubmit = (e) => {
   e.preventDefault(); // Prevent form from refreshing if inside a form

   if (answer.trim() !== "" && (!speaking || (e.key && e.key === "Enter"))) {
     setSubmittedAnswer(answer);
     setAnswer(""); // Clear input field after submission
   }
 };


  const voiceMessage = () => {
    setSpeaking(!speaking);
    if(!speaking){
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-IN";
      recognition.start();

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        setAnswer(transcript);
        setSpeaking(false);
      };
    }
  };

  return (
    <div className="bg-gray-900 p-4 m-4 rounded-lg shadow-md flex flex-col gap-3">
      {/* Question Text */}
      <p className="text-white text-lg font-medium">{question}</p>

      {/* Input & Button Section */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          className={`ml-2 p-2 ${
            !speaking
              ? "bg-blue-600 hover:bg-blue-500"
              : "bg-red-600 scale-150 hover:bg-red-500"
          } rounded-lg `}
          onClick={voiceMessage}
        >
          <Mic size={20} />
        </button>

        <button
          onClick={handleSubmit} // Simplified function call
          className="p-2 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-md text-white flex items-center"
        >
          <Send size={20} />
        </button>
      </div>

      {/* Display Answer */}
      {submittedAnswer && (
        <p className="text-green-400 mt-2">Ans: {submittedAnswer}</p>
      )}
    </div>
  );
};

export default Questions;
