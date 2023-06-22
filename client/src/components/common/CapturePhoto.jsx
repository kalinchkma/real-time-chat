import {IoClose} from "react-icons/io5";
import { useEffect, useRef } from "react";

function CapturePhoto({setImage, hide}) {
  const videoRef = useRef(null);


  useEffect(() => {
    let stream;
    const startCamera = async () => {
      stream = await  navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
      videoRef.current.src = stream;
    };
    startCamera();
    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  // cature photo from camera
  const capturePhoto = ()=>{  
    const canvas = document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"))
    hide(false)
  }
  return (
  <div className="absolute h-4/6 w-4/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center">
    <div className="flex flex-col gap-4 w-full justify-center">
      {/* close capture image */}
      <div onClick={() => hide(false)} className="pt-2 pr-2 cursor-pointer flex items-end justify-end">
        <IoClose className="h-10 w-10 cursor-pointer"  />
      </div>
      <div className="flex justify-center">
      {/* <iframe width="853" height="480" src="https://www.youtube.com/embed/Ukk8sGRuOXo" title="রাশিয়ার সাথে হাত মিলিয়ে যুক্তরাষ্ট্রকে ক্ষেপানোর ঝুঁকি কেন নিচ্ছে আমিরাত ? | UAE | Ekattor TV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <video id="video" width={400} height={400} autoPlay ref={videoRef}></video>
      </div>
      <button
        className="h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10"
        onClick={capturePhoto}
      >
      </button>
    </div>    
  </div>
  )
}

export default CapturePhoto;
