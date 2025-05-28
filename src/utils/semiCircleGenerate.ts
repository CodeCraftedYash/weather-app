export function generateSemiCirclePath(
  width: number,
  height: number,
  steps: number,
  position: boolean // true = start from left, move clockwise
) {
  if (width <= 0 || height <= 0 || steps <= 0) return;

  const radiusX = width / 2;
  const radiusY = height / 2;
  const centerX = radiusX;
  const centerY = radiusY;

  const x: number[] = [];
  const y: number[] = [];

  for (let i = 0; i <= steps; i++) {
    const theta = position
      ? Math.PI + (2 * Math.PI * i) / steps  // Start from 180° (left) → clockwise
      : (2 * Math.PI * i) / steps;          // Start from 0° (right) → clockwise

    const xPos = centerX + radiusX * Math.cos(theta);
    const yPos = centerY + radiusY * Math.sin(theta);
    x.push(xPos);
    y.push(yPos);
  }

  return { x, y };
}
