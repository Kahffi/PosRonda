import { useEffect, useState } from "react";
import PostureDisplay from "../components/PostureDisplay";
import { database } from "../firebase";
import { ref, onValue, query, limitToLast } from "firebase/database";
import SetPoint from "../components/SetPoint";
import { Icon } from "@iconify/react";
type FetchedData = {
  [key: string]: { Accel: { X: string }; timestamp: string };
};

type TSensorData = {
  X: number;
  timestamp: string;
};

export default function HomePage() {
  const [data, setData] = useState<TSensorData | null>(null);
  // const [isCalibrating, setIsCalibrating] = useState(false);
  // const [calibrationPhase, setCalibrationPhase] = useState("min");

  // function startCalibration() {
  //   setIsCalibrating(true);
  // }

  console.log(data);

  useEffect(() => {
    const angleRef = ref(
      database,
      "UsersData/oWhYQcBOtzb8FESL2GpGY3Fk1GJ3/readings/"
    );

    const sensorQuery = query(angleRef, limitToLast(1));
    const unsubscribe = onValue(sensorQuery, (snapshot) => {
      if (!snapshot.val()) return;
      const sensorData: TSensorData = { timestamp: "", X: 0 };
      Object.values(snapshot.val() as FetchedData).forEach((obj) => {
        sensorData["X"] = parseFloat(obj.Accel.X);
        sensorData["timestamp"] = obj.timestamp;
      });
      setData({ ...sensorData });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center w-full pt-10 px-4 gap-8">
      <h1 className="font-medium text-3xl w-full">
        Halo{" "}
        <span>
          <Icon
            className="inline"
            icon={"fluent-emoji-flat:waving-hand-light"}
            fontSize={"3rem"}
            flip="horizontal"
          />
        </span>
      </h1>
      <PostureDisplay percentage={data?.X ? (1 + data?.X) * 100 : 0} />
      {/* <button className="bg-blue-500 text-white p-2">Calibrate</button> */}
      <SetPoint />
    </div>
  );
}
