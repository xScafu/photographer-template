import "./App.css";
import DevicePreviewWrapper from "./components/DevicePreviewWrapper";
import PhotographerLandingPage from "./components/PhotographerLandigPage";
import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <div className="bg-cream text-dark font-sans">
          <DevicePreviewWrapper
            sizes={{
              desktop: "w-full h-full",
              tablet: "w-[1024px] h-[768px]",
              mobile: "w-[329px] h-[695px]",
            }}
            hideScrollbar={true}
          >
            <PhotographerLandingPage />
          </DevicePreviewWrapper>
        </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
