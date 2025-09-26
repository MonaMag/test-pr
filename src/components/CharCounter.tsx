"use client";
import { useState } from "react";
import countCharacters from "@/functions/countСharacters";
import ProjectLayout from "./ProjectLayout";

export default function CharCounter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Record<string, number>>({});

  const handleCount = () => {
    setResult(countCharacters(input));
  };

  return (
    <ProjectLayout title="Count characters" result={result}>
      <div className="space-y-4 w-96">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Enter text"
        />
        <button
          onClick={handleCount}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Посчитать
        </button>
      </div>
    </ProjectLayout>
  );
}
