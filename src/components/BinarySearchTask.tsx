import { useState } from "react";
import ProjectLayout from "./ProjectLayout";

export function BinarySearchTask() {
  const [length, setLength] = useState<number>(0);
  const [array, setArray] = useState<number[]>([]);
  const [searchNumber, setSearchNumber] = useState<string>("");
  const [result, setResult] = useState<Record<string, number>>({});

  const generateArray = () => {
    setArray([1, 2, 4, 6]);
  };

  function binarySearch() {
    setResult({a: 1, b: 2});
  }

  return (
    <ProjectLayout title="Binary search task" result={result}>
      <div className="space-y-2">
        <label className="block">Введите длину массива: </label>
        <input
          type="number"
          value={length}
          className="border rounded p-2 w-full mb-2"
          onChange={(e) => setLength(Number(e.currentTarget.value))}
        />
        <button
          onClick={generateArray}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Сгененрировать массив
        </button>
      </div>
      <div>
        <p className="mb-1">Отсортированный массив</p>
        {array.map((num, index) => (
          <span key={index} className="px-2 py-1 ml-1 bg-gray-200 rounded">
            {num}
          </span>
        ))}
      </div>

      <div>
        <p>Введите число для поиска</p>
        <input
          type="number"
          value={searchNumber}
          className="border rounded p-2 w-full mb-2"
          onChange={(e) => setSearchNumber(e.currentTarget.value)}
        />
        <button
          onClick={binarySearch}
          className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
        >
          Найти число
        </button>
      </div>
    </ProjectLayout>
  );
}
