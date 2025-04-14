import "./App.css";
import DevicePreviewWrapper from "./components/DevicePreviewWrapper";
<<<<<<< HEAD
import PhotographerLandingPage from "./components/PhotographerLandigPage";
=======
>>>>>>> 2d262bfe3a9842939c7b42258970fb7ab999a8c6

function App() {
  return (
    <>
      <div className="bg-cream text-dark font-sans">
<<<<<<< HEAD
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
=======
        <DevicePreviewWrapper />
>>>>>>> 2d262bfe3a9842939c7b42258970fb7ab999a8c6
      </div>
    </>
  );
}

export default App;
