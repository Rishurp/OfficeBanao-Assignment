import { Box, Typography } from "@mui/material";
import EditPanel from "./EditPanel";
import { useState } from "react";
import AssetCropper from "./AssetCropper";

const AssetPreview = ({ selectedImage }) => {
  const [isOpen, setPanel] = useState(false);
  const [showCropper, setShowCropper] = useState(false);

  const togglePanel = () => {
    setPanel(!isOpen);
    setShowCropper(false);
  };

  const handleCropIconClick = () => {
    setShowCropper(!showCropper);
  };

  return (
    <Box
      sx={{
        height: "85%",
        flex: 2,
        padding: 2,
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: 40, right: 40, zIndex: "999" }}>
        <EditPanel
          src={selectedImage}
          handleCrop={handleCropIconClick}
          togglePanel={togglePanel}
          isOpen={isOpen}
        />
      </Box>
      {selectedImage ? (
        <Box>
          {showCropper ? (
            <Box>
              <AssetCropper src={selectedImage} />
            </Box>
          ) : (
            <Box
              component="img"
              src={selectedImage}
              alt="Uploaded Preview"
              sx={{
                width: "85%",
                height: "100%",
                borderRadius: 1,
                mb: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
      ) : (
        <Typography variant="body2" sx={{ color: "gray" }}>
          No image selected
        </Typography>
      )}
    </Box>
  );
};

export default AssetPreview;