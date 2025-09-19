"use client";
import countCharacters from "@/functions/countСharacters";
import { useState } from "react";

export default function ProjectsPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Record<string, number>>({});

  const handleCount = () => {
    setResult(countCharacters(input));
  };

  return (
    <div className="space-y-4 w-96">
      <h1 className="text-2xl font-bold">Project</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Введите текст"
      />

      <button
        onClick={handleCount}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Count
      </button>

      <pre className="bg-gray-100 p-4 rounded">
        {result && Object.keys(result).length > 0
          ? JSON.stringify(result, null, 2)
          : null}
      </pre>
    </div>
  );
}
