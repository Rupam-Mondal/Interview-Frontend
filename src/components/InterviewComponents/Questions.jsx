import { Mic, Nfc, Send, Trash } from "lucide-react";
import React, { useState } from "react";

const Questions = ({ question }) => {
  const [answer, setAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState(null);
  const [speaking, setSpeaking] = useState(false);

  const [text, setText] = useState(question);

  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.trim() !== "" && (!speaking || (e.key && e.key === "Enter"))) {
      setSubmittedAnswer(answer);
      setAnswer("");
    }
  };

  const voiceMessage = () => {
    setSpeaking(!speaking);
    if (!speaking) {
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
      <div className="flex justify-between items-center">
        <p className="text-white text-lg font-medium">{question}</p>
        <button
          className="bg-violet-600 hover:bg-violet-500 p-2 rounded-lg text-white transition"
          onClick={speak}
        >
          <Nfc size={20} />
        </button>
      </div>

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
        <div className="flex justify-between">
          <p className="text-green-400 mt-2">Ans: {submittedAnswer}</p>
          <button
            className="bg-red-500 p-2 rounded-md hover:bg-red-400"
            onClick={() => {
              setSubmittedAnswer("");
            }}
          >
            <Trash size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
