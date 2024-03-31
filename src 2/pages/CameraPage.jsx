import React, { useState, useRef, useEffect } from "react";
import {Camera} from "react-camera-pro";
import {Input, Text} from "../components";
const CameraPage = (props) => {
  useEffect(() => {
    // Prevent scrolling when the component mounts
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(true);

  const takePhoto = () => {
    const photo = camera.current.takePhoto();
    setImage(photo);
    setShowCamera(false); // Hide the camera component after taking the photo
  };

  const switchToCamera = () => {
    setImage(null); // Clear the static image
    setShowCamera(true); // Show the camera component again
  };

  const handleSubmit = () => {
    console.log(image);
  };


  return (
    <>
<div>
<div className=" relative flex flex-col min-h-[70rem] max-h-[70rem]">
  <div className="absolute inset-0 w-full h-[70rem]">
  <div className="flex flex-col">
  {showCamera ? (
        <Camera ref={camera} numberOfCamerasCallback={(numCameras) => setNumberOfCameras(numCameras)} facingMode='environment'/>
      ) : (
        <img src={image} alt="Photo preview" />
      )}
      
    </div>
  </div>
<footer className="absolute bottom-5 w-full">
    <div className="flex flex-row gap-[10px] justify-center items-center">
    {image ? (
        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
        onClick={switchToCamera}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Retake</Text></button>
      ) : (
        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
        onClick={takePhoto}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Take Photo</Text></button>
      )}
      {image && (
         <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px]"
         onClick={handleSubmit}><Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Submit</Text></button>
            
      )}
      </div>
  </footer>
</div>
</div>
      </>
      
    );
}
export default CameraPage;