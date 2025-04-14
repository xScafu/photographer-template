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
  tablet: "w-[768px] h-[1024px]",
  mobile: "w-[375px] h-[667px]",
};

export default function DevicePreviewWrapper({
  children,
  sizes = defaultSizes,
  hideScrollbar = true,
}: DevicePreviewWrapperProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6">
      <div className="flex gap-4 mt-8">
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

      <div className="flex items-center justify-center w-full h-full">
        <div
          className={clsx(
            "relative shadow-2xl bg-white transition-all duration-500",
            device === "desktop"
              ? "w-full h-full overflow-auto"
              : "border-[14px] rounded-[2rem] border-black overflow-auto",
            sizes[device],
            clsx(
              hideScrollbar && device !== "desktop" && "hide-scrollbar",
              device !== "desktop" && "max-h-[695px]"
            )
          )}
        >
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
