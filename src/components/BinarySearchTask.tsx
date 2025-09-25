import { useState } from "react";
import ProjectLayout from "./ProjectLayout";

const MAX_LENGTH = 20;

export function BinarySearchTask() {
  const [length, setLength] = useState<string>("");
  const [array, setArray] = useState<number[]>([]);
  const [searchNumber, setSearchNumber] = useState<string>("");
  const [result, setResult] = useState<Record<string, number | string>>({});

  const generateArray = () => {
    const n = parseInt(length, 10);
    if (!Number.isInteger(n) || n <= 0) {
      setResult({ error: "Введите корректное целое число больше 0" });
      return;
    }
    if (n > MAX_LENGTH) {
      setResult({ error: `Максимальная длина массива — ${MAX_LENGTH}` });
      return;
    }

    const sortArray = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 101)
    ).sort((a, b) => a - b);
    setArray(sortArray);
    setResult({});
  };

  function binarySearch() {
    setResult({});
  }

  function handleSearch() {
    setResult({});
  }

  return (
    <ProjectLayout title="Binary search task" result={result}>
      <div className="space-y-2">
        <label className="block">Введите длину массива: </label>
        <input
          type="number"
          value={length}
          className="border rounded p-2 w-full mb-2"
          onChange={(e) => setLength(e.currentTarget.value)}
        />
        <button
          onClick={generateArray}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Сгененрировать массив
        </button>
      </div>
      {array.length > 0 && (
        <div>
          <p className="mb-1">Отсортированный массив</p>
          <div className="flex flex-wrap">
            {array.map((num, index) => (
              <span key={index} className="px-2 py-1  bg-gray-200">
                {num}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <p>Введите число для поиска</p>
        <input
          type="number"
          value={searchNumber}
          className="border rounded p-2 w-full mb-2"
          onChange={(e) => setSearchNumber(e.currentTarget.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
        >
          Найти число
        </button>
      </div>
    </ProjectLayout>
  );
}
