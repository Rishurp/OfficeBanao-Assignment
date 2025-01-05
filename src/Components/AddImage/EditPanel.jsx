import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CropIcon from "@mui/icons-material/Crop";
import RotateRightIcon from "@mui/icons-material/RotateRight"; // Import the rotate icon
import { Box } from "@mui/material";

const EditPanel = ({ handleCrop, togglePanel, isOpen, handleRotate }) => {
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "rgba(0, 0, 0, 0.53)",
        borderRadius: "5px",
      }}
    >
      <Box>
        {isOpen ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <CloseIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => togglePanel()}
            />
            <CropIcon
              sx={{ color: "white", paddingY: 1, cursor: "pointer" }}
              onClick={() => handleCrop()}
            />
            {/* Rotate Button */}
            <RotateRightIcon
              sx={{ color: "white", paddingY: 1, cursor: "pointer" }}
              onClick={() => handleRotate()} // Trigger rotation on click
            />
          </Box>
        ) : (
          <Box>
            <EditIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={togglePanel}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EditPanel;
