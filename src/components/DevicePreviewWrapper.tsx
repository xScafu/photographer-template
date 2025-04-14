<<<<<<< HEAD
import { useState, ReactNode } from "react";
import clsx from "clsx";

type DevicePreviewWrapperProps = {
  children: ReactNode;
  sizes?: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  hideScrollbar?: boolean;
};

const defaultSizes = {
  desktop: "w-full h-full",
=======
import { useState } from "react";
import clsx from "clsx";
import PhotographerLandingPage from "../components/PhotographerLandigPage";
const sizes = {
  desktop: "w-[1280px] h-[800px]",
>>>>>>> 2d262bfe3a9842939c7b42258970fb7ab999a8c6
  tablet: "w-[768px] h-[1024px]",
  mobile: "w-[375px] h-[667px]",
};

<<<<<<< HEAD
export default function DevicePreviewWrapper({
  children,
  sizes = defaultSizes,
  hideScrollbar = true,
}: DevicePreviewWrapperProps) {
=======
export default function DevicePreviewWrapper() {
>>>>>>> 2d262bfe3a9842939c7b42258970fb7ab999a8c6
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6">
=======
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
>>>>>>> 2d262bfe3a9842939c7b42258970fb7ab999a8c6
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
<<<<<<< HEAD
            "relative shadow-2xl bg-white transition-all duration-500",
            device === "desktop"
              ? "w-full h-full overflow-auto"
              : "border-[14px] rounded-[2rem] border-black overflow-auto",
            sizes[device],
            hideScrollbar && device !== "desktop" && "hide-scrollbar",
            "max-h-[695px]"
          )}
        >
          <div className="w-full h-full">{children}</div>
=======
            "relative overflow-hidden border-[14px] border-black rounded-[2rem] shadow-2xl bg-white transition-all duration-500",
            sizes[device]
          )}
        >
          <div className="w-full h-full overflow-auto">
            <PhotographerLandingPage />
          </div>
>>>>>>> 2d262bfe3a9842939c7b42258970fb7ab999a8c6
        </div>
      </div>
    </div>
  );
}
