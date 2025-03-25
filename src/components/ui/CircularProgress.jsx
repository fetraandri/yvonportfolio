import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const CircularProgress = ({ percentage, label, size = 120, strokeWidth = 10 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { offset } = useSpring({
    from: { offset: circumference },
    to: { offset: isMounted ? circumference - (percentage / 100) * circumference : circumference },
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Cercle de fond */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Cercle animé */}
        <animated.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1E40AF"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="mt-2 text-lg font-medium text-gray-800">{percentage}%</span>
      <span className="text-sm text-gray-600 text-center">{label}</span>
    </div>
  );
};

export default CircularProgress;