import { useState } from "react";
import ProjectLayout from "./ProjectLayout";

export default function SpiralMatrix() {
  const [size, setSize] = useState<number | undefined>(undefined);
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [result, setResult] = useState<Record<string, number>>({});

  console.log(matrix.flat());

  const craetMatrix = () => {
    const matr: number[][] = [];
    let value = 1;
    if (size) {
      for (let i = 0; i <= size - 1; i++) {
        const currentRow = [];

        for (let j = 0; j <= size - 1; j++) {
          currentRow.push(value++);
        }
        matr.push(currentRow);
      }
      console.log(matrix);
      setMatrix(matr);
      setSize(undefined);
      return matrix;
    }
  };

  const spiralCounter = () => {
    return {};
  };

  const handleCount = () => {
    setResult(spiralCounter());
  };

  return (
    <ProjectLayout title="Go through the matrix" result={result}>
      <div className="flex flex-col space-y-4 w-96">
        <div className="flex gap-2 ">
          <input
            type="number"
            min="1"
            value={size || ""}
            onChange={(e) => setSize(Number(e.currentTarget.value))}
            className="w-full border rounded p-2"
            placeholder="Введите размер матрицы"
          />

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            onClick={craetMatrix}
          >
            Creat
          </button>
        </div>

        {matrix.length > 0 && (
          <div className="flex flex-col w-fit px-2 border-x-2 rounded">
            {matrix.map((row, r) => (
              <div
                key={r}
                className="grid gap-2 text-center"
                style={{
                  gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
                }}
              >
                {row.map((col, c) => (
                  <div key={c} className="p-1">
                    {col}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          onClick={handleCount}
        >
          Go in a spiral
        </button>
      </div>
    </ProjectLayout>
  );
}
