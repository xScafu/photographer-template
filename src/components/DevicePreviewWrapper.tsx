import { useState } from "react";
import clsx from "clsx";
import PhotographerLandingPage from "../components/PhotographerLandigPage";
const sizes = {
  desktop: "w-[1280px] h-[800px]",
  tablet: "w-[768px] h-[1024px]",
  mobile: "w-[375px] h-[667px]",
};

export default function DevicePreviewWrapper() {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
      <div className="flex gap-4">
        <button
          onClick={() => setDevice("desktop")}
          className="bg-white px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Desktop
        </button>
        <button
          onClick={() => setDevice("tablet")}
          className="bg-white px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Tablet
        </button>
        <button
          onClick={() => setDevice("mobile")}
          className="bg-white px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Mobile
        </button>
      </div>

      <div className="flex items-center justify-center w-full h-full min-h-[900px]">
        <div
          className={clsx(
            "relative overflow-hidden border-[14px] border-black rounded-[2rem] shadow-2xl bg-white transition-all duration-500",
            sizes[device]
          )}
        >
          <div className="w-full h-full overflow-auto">
            <PhotographerLandingPage />
          </div>
        </div>
      </div>
    </div>
  );
}
