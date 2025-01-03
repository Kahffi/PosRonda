import CircleProgress from "./CirclePorgress";
export default function PostureDisplay({
  percentage,
}: {
  percentage: number | undefined;
}) {
  return (
    <div>
      <div className="flex flex-col items-center w-fit">
        <p className="text-xl font-bold mb-2">
          Posture Incorrectness:{" "}
          {!percentage
            ? 0
            : percentage > 100
            ? 100
            : percentage < 0
            ? 0
            : percentage.toFixed(0)}
          %
        </p>
        <CircleProgress color="#3DAD95" percentage={percentage || 0} />
      </div>
    </div>
  );
}
