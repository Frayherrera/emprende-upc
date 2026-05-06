interface MiniLineChartProps {
  values: number[];
  color?: string;
  width?: number;
  height?: number;
}

export function MiniLineChart({
  values,
  color = "#10b981",
  width = 120,
  height = 40,
}: MiniLineChartProps) {
  if (!values || values.length < 2) return null;

  const max = Math.max(...values, 1);
  const min = Math.min(...values);
  const range = max - min || 1;
  const padX = 2;
  const padY = 4;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;
  const xStep = innerW / (values.length - 1);

  const points = values
    .map((v, i) => {
      const x = padX + i * xStep;
      const y = padY + innerH - ((v - min) / range) * innerH;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = [
    `${padX},${padY + innerH}`,
    ...values.map((v, i) => {
      const x = padX + i * xStep;
      const y = padY + innerH - ((v - min) / range) * innerH;
      return `${x},${y}`;
    }),
    `${padX + innerW},${padY + innerH}`,
  ].join(" ");

  const gradientId = `grad-${color.replace("#", "")}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="overflow-visible"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Área bajo la línea */}
      <polygon points={areaPoints} fill={`url(#${gradientId})`} />
      {/* Línea */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Punto final */}
      <circle
        cx={padX + (values.length - 1) * xStep}
        cy={padY + innerH - ((values[values.length - 1] - min) / range) * innerH}
        r="2.5"
        fill={color}
      />
    </svg>
  );
}