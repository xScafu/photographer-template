import "./App.css";
import DevicePreviewWrapper from "./components/DevicePreviewWrapper";
import PhotographerLandingPage from "./components/PhotographerLandigPage";

function App() {
  return (
    <>
      <div className="bg-cream text-dark font-sans">
        <DevicePreviewWrapper
          sizes={{
            desktop: "w-full h-full",
            tablet: "w-[1024px] h-[768px]",
            mobile: "w-[414px] h-[896px]",
          }}
          hideScrollbar={true}
        >
          <PhotographerLandingPage />
        </DevicePreviewWrapper>
      </div>
    </>
  );
}

export default App;
