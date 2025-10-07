import { useState } from "react";
import ProjectLayout from "./ProjectLayout";
import { intersectRect } from "@/functions/intersectRect";
import { makeRectangle } from "@/functions/makeRectangle";

export type RectDataType = [number, number, number, number];

export default function RectIntersection() {
  const [aLeftBottom, setALeftBottom] = useState("");
  const [aRightTop, setARightTop] = useState("");
  const [bLeftBottom, setBLeftBottom] = useState("");
  const [bRightTop, setBRightTop] = useState("");
  const [result, setResult] = useState<RectDataType | null>(null);
  const [error, setError] = useState<string | null>(null);

  //   const inputDataTransform = (inputData: string): [number, number] | null => {
  //     const coordinates = inputData.split(",").map((p) => Number(p.trim()));

  //     if (coordinates.length !== 2 || coordinates.some(isNaN)) {
  //       return null;
  //     }

  //     return [coordinates[0], coordinates[1]];
  //   };

  //   const handleIntersection = () => {
  //     const A1 = inputDataTransform(aLeftBottom);
  //     const A2 = inputDataTransform(aRightTop);
  //     const B1 = inputDataTransform(bLeftBottom);
  //     const B2 = inputDataTransform(bRightTop);

  //     if (!A1 || !A2 || !B1 || !B2) {
  //       setResult(null);
  //       setError("Некорректный ввод. Нужно два числа через запятую");
  //       return;
  //     }

  //     const rectA: RectDataType = [A1[0], A1[1], A2[0], A2[1]];
  //     const rectB: RectDataType = [B1[0], B1[1], B2[0], B2[1]];

  //     setResult(intersectRect(rectA, rectB));
  //   };

  const handleIntersection = () => {
    const rectA = makeRectangle(aLeftBottom, aRightTop);
    const rectB = makeRectangle(bLeftBottom, bRightTop);

    if (!rectA || !rectB) {
      setResult(null);
      setError("Некорректный ввод. Нужно два числа через запятую");
      return;
    }

    setResult(intersectRect(rectA, rectB));
    setError(null);
  };

  return (
    <ProjectLayout title="Find rectangles intersection" result={result}>
      <div className="space-y-6 w-96">
        <p className="text-sm text-gray-600">
          Введите координаты углов через запятую: <code>0,0</code>
        </p>

        <div className="p-3 border rounded-lg space-y-2 bg-gray-50">
          <h3 className="font-semibold text-sm text-gray-700">
            Первый прямоугольник
          </h3>
          <div className="flex gap-1">
            <input
              type="text"
              value={aLeftBottom}
              onChange={(e) => {
                setALeftBottom(e.currentTarget.value);
                setError(null);
                setResult(null);
              }}
              placeholder="Левый нижний угол"
              className="w-full border border-green-600 rounded p-2 text-xs"
            />
            <input
              type="text"
              value={aRightTop}
              onChange={(e) => {
                setARightTop(e.currentTarget.value);
                setError(null);
                setResult(null);
              }}
              placeholder="Правый верхний угол"
              className="w-full border border-green-600 rounded p-2 text-xs"
            />
          </div>
        </div>

        <div className="p-3 border rounded-lg space-y-2 bg-gray-50">
          <h3 className="font-semibold text-sm text-gray-700">
            Второй прямоугольник
          </h3>
          <div className="flex gap-1">
            <input
              type="text"
              value={bLeftBottom}
              onChange={(e) => {
                setBLeftBottom(e.currentTarget.value);
                setError(null);
                setResult(null);
              }}
              placeholder="Левый нижний угол"
              className="w-full border border-green-600 rounded p-2 text-xs"
            />
            <input
              type="text"
              value={bRightTop}
              onChange={(e) => {
                setBRightTop(e.currentTarget.value);
                setError(null);
                setResult(null);
              }}
              placeholder="Правый верхний угол"
              className="w-full border border-green-600 rounded p-2 text-xs"
            />
          </div>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          onClick={handleIntersection}
          className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer w-full"
        >
          Найти пересечение
        </button>
      </div>
    </ProjectLayout>
  );
}
