export function generateCirclePath(
  width: number,
  height: number,
  steps: number,
  position: boolean 
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
      ? Math.PI + (2 * Math.PI * i) / steps 
      : (2 * Math.PI * i) / steps;      

    const xPos = centerX + radiusX * Math.cos(theta);
    const yPos = centerY + radiusY * Math.sin(theta);
    x.push(xPos);
    y.push(yPos);
  }

  return { x, y };
}
