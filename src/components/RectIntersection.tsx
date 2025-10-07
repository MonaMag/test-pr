import { useState } from "react";
import ProjectLayout from "./ProjectLayout";
import { intersectRect } from "@/functions/intersectRect";
import { makeRectangle } from "@/functions/makeRectangle";

export type RectDataType = [number, number, number, number];

const SCALE = 10;

const toSvgRect = ([x1, y1, x2, y2]: RectDataType) => ({
  x: x1 * SCALE,
  y: 300 - y2 * SCALE,
  width: (x2 - x1) * SCALE,
  height: (y2 - y1) * SCALE,
});

export default function RectIntersection() {
  const [aLeftBottom, setALeftBottom] = useState("");
  const [aRightTop, setARightTop] = useState("");
  const [bLeftBottom, setBLeftBottom] = useState("");
  const [bRightTop, setBRightTop] = useState("");
  const [result, setResult] = useState<RectDataType | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const rectA = makeRectangle(aLeftBottom, aRightTop);
  const rectB = makeRectangle(bLeftBottom, bRightTop);
  const svgRectA = rectA ? toSvgRect(rectA) : null;
  const svgRectB = rectB ? toSvgRect(rectB) : null;
  const svgIntersect = result ? toSvgRect(result) : null;

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

        <svg
          width={300}
          height={300}
          viewBox="0 0 300 300"
          style={{ border: "1px solid black" }}
        >
          {svgRectA && <rect {...svgRectA} fill="blue" fillOpacity={0.5} />}
          {svgRectB && <rect {...svgRectB} fill="red" fillOpacity={0.5} />}
          {svgIntersect && (
            <rect {...svgIntersect} fill="green" fillOpacity={0.5} />
          )}
        </svg>
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
