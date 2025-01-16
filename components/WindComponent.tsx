import React from "react";

interface WindComponentProps {
  degree?: number;
  size?: number;
  color?: string;
}

const WindComponent = ({
  degree = 0,
  size = 200,
  color = "#1976d2",
}: WindComponentProps) => {
  // Normalize the rotation to always be between 0 and 360
  const normalizedDegree = ((degree % 360) + 360) % 360;

  return (
    <div className="relative inline-block">
      {/* Compass background */}
      <svg
        viewBox="0 0 100 100"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />

        {/* Direction marks */}
        {[0, 90, 180, 270].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="5"
            x2="50"
            y2="15"
            stroke="#94a3b8"
            strokeWidth="2"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}

        {/* Cardinal direction letters */}
        <text
          x="50"
          y="20"
          textAnchor="middle"
          className="text-sm"
          fill="#64748b"
        >
          N
        </text>
        <text
          x="80"
          y="52"
          textAnchor="middle"
          className="text-sm"
          fill="#64748b"
        >
          E
        </text>
        <text
          x="50"
          y="85"
          textAnchor="middle"
          className="text-sm"
          fill="#64748b"
        >
          S
        </text>
        <text
          x="20"
          y="52"
          textAnchor="middle"
          className="text-sm"
          fill="#64748b"
        >
          W
        </text>

        {/* Direction pointer */}
        <g transform={`rotate(${normalizedDegree} 50 50)`}>
          <path d="M50 15 L45 45 L50 40 L55 45 L50 15" fill={color} />
          <circle cx="50" cy="50" r="3" fill={color} />
        </g>
      </svg>
    </div>
  );
};

export default WindComponent;
