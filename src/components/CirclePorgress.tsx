import { Icon } from "@iconify/react";

type CircleProps = {
  color: string;
  percentage?: number;
};

const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

function Circle({ color, percentage }: CircleProps) {
  const r = 80;
  const circ = 2 * Math.PI * r;
  const strokePercent = ((100 - percentage!) * circ) / 100;

  return (
    <circle
      r={r}
      cx={100}
      cy={99}
      fill="transparent"
      stroke={strokePercent !== circ ? color : ""}
      strokeWidth={"1.4rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePercent : 0}
      strokeLinecap="round" // Tambahkan ini untuk ujung rounded
    ></circle>
  );
}

type CircleProgressProps = {
  percentage: number;
  color: string;
};

export default function CircleProgress({
  percentage,
  color,
}: CircleProgressProps) {
  const pct = cleanPercentage(percentage);
  return (
    <div className="overflow-hidden w-fit relative">
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <Circle color="#D1F3EE" />
          <Circle color={color} percentage={pct} />
        </g>
      </svg>
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <Icon
          icon={"material-symbols:man"}
          fontSize={"6rem"}
          className="text-gray-700"
        />
      </div>
    </div>
  );
}
