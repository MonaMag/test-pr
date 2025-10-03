type RectType = number[];

export function intersectRect(a: RectType, b: RectType) {
  const [x1, y1, x2, y2] = a;
  const [n1, m1, n2, m2] = b;

  if (!(x1 < n2 && n1 < x2 && y1 < m2 && m1 < y2)) {
    return null;
  }

  const left = Math.max(x1, n1);
  const bottom = Math.max(y1, m1);
  const right = Math.min(x2, n2);
  const top = Math.min(y2, m2);

  return [left, bottom, right, top];
}

