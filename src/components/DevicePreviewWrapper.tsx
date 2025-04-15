import { useState, ReactNode } from "react";
import { Button } from "primereact/button";
import clsx from "clsx";
import LogoVector from "./LogoVector";

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
      <div className="flex items-center gap-4 mt-8">
        <div className="w-12 xl:w-14 fill-black">
          <LogoVector />
        </div>
        <h1>Check this page in various sizes: </h1>
        <Button
          icon="pi pi-desktop"
          className="bg-white shadow hover:bg-green-50 focus:bg-green-50 focus:outline-2 focus:outline-green-700 outline-offset-2 p-3 rounded-full w-10 h-10"
          onClick={() => setDevice("desktop")}
        />
        <Button
          icon="pi pi-tablet"
          className="bg-white shadow hover:bg-green-50 focus:bg-green-50 focus:outline-2 focus:outline-green-700 outline-offset-2 p-3 rounded-full w-10 h-10"
          onClick={() => setDevice("tablet")}
        />
        <Button
          icon="pi pi-mobile"
          className="bg-white shadow hover:bg-green-50 focus:bg-green-50 focus:outline-2 focus:outline-green-700 outline-offset-2 p-3 rounded-full w-10 h-10"
          onClick={() => setDevice("mobile")}
        />
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
