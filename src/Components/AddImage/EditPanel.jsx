import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CropIcon from "@mui/icons-material/Crop";

const EditPanel = ({ handleCrop, togglePanel, isOpen }) => {
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
