import { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, set } from "firebase/database";

export default function SetPoint() {
  const [value, setValue] = useState(0);
  // const inputRef = useRef<null>(null);

  // function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   if (!inputRef.current) return;
  //   if (isNaN(parseInt(e.target.value)) && e.target.value.length > 0) return;
  //   if (parseInt(e.target.value) > 100 || parseInt(e.target.value) < 0) {
  //     alert("angka yang anda masukkan tidak valid");
  //     return;
  //   }
  //   console.log(e.target.value);
  //   setValue(parseInt(e.target.value));
  // }

  function handleValButton(method: "+" | "-") {
    if (method === "+") {
      if (value === 100) return;
      setValue((prev) => prev + 1);
    }
    if (method === "-") {
      if (value === 0) return;
      setValue((prev) => prev - 1);
    }
  }

  useEffect(() => {
    const setPointRef = ref(
      database,
      "UsersData/oWhYQcBOtzb8FESL2GpGY3Fk1GJ3/setPoint/"
    );
    set(setPointRef, -1 + (0 - -1) * (value / 100));
  }, [value]);

  return (
    <div className="shadow-lg w-fit p-3 rounded-md border">
      <p className="mb-4 text-center font-semibold">Set Point</p>
      {/* wrapper */}
      <div className="flex gap-2 rounded-md border shadow-md">
        <button
          className="p-3 text-2xl font-bold"
          onClick={() => handleValButton("-")}
        >
          -
        </button>
        <div className=" p-2 w-16 text-center text-2xl font-bold flex justify-center items-center shadow-inner border">
          <span>{value}</span>
        </div>
        <button
          className="p-3 text-2xl font-bold"
          onClick={() => handleValButton("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}
