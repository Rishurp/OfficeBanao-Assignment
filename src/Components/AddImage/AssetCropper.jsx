import ReactCrop from "react-image-crop";
import { useState, useRef } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch } from "react-redux";
import {
  addCroppedImage,
  updateLastCroppedImage,
} from "../../redux/assetSlice";

const AssetCropper = ({ src }) => {
  const [crop, setCrop] = useState({
    unit: "%", 
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  const [completedCrop, setCompletedCrop] = useState(null); 
  const imageRef = useRef(null); 
  const dispatch = useDispatch(); 

  const getCroppedImage = (crop) => {
    if (!imageRef.current || !crop || !crop.width || !crop.height) {
      return null;
    }

    const canvas = document.createElement("canvas");
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      imageRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        }
      }, "image/jpeg");
    });
  };

  
  const handleCropComplete = async (crop) => {
    setCompletedCrop(crop);

    if (crop.width && crop.height) {
      const croppedBlob = await getCroppedImage(crop);
      if (croppedBlob) {
        const croppedUrl = URL.createObjectURL(croppedBlob);
        dispatch(updateLastCroppedImage(croppedUrl));
      }
    }
  };

  return (
    <div>
      <ReactCrop
        crop={crop}
        onChange={(newCrop) => setCrop(newCrop)} 
        onComplete={handleCropComplete} 
      >
        <img
          ref={imageRef}
          src={src}
          alt="To crop"
          style={{ objectFit: "contain", width: "85%", height: "100%" }}
        />
      </ReactCrop>
    </div>
  );
};

export default AssetCropper;
