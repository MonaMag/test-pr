import { RectDataType } from "@/components/RectIntersection";

const inputDataTransform = (inputData: string): [number, number] | null => {
  const coordinates = inputData.split(",").map((p) => Number(p.trim()));
  if (coordinates.length !== 2 || coordinates.some(isNaN)) {
    return null;
  }
  return [coordinates[0], coordinates[1]];
};

export function makeRectangle(leftBottom: string, rightTop: string): RectDataType | null {
  const A1 = inputDataTransform(leftBottom);
  const A2 = inputDataTransform(rightTop);

  if(!A1 || !A2) return null;

  return [A1[0], A1[1], A2[0], A2[1]];
}
