import { Box, Chip, TextField, Typography, Button } from "@mui/material";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import UploadIcon from "@mui/icons-material/Upload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEditedImage } from "../../redux/assetSlice";

const AssetDetails = ({ src }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lastEditedImage = useSelector((state) => state.assets.lastEditedImage);

  const handleUploadClick = () => {
    if (lastEditedImage) {
      dispatch(addEditedImage());
    }
    navigate("/image-list");
  };

  return (
    <Box
      sx={{
        padding: 2,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "85%",
      }}
    >
      <Box sx={{ flexGrow: "1" }}>
        <Box sx={{ border: "1px solid #E7E7EB", borderRadius: "5px" }}>
          <Typography sx={{ padding: 1 }}>Asset Details</Typography>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          multiline
          minRows={4}
          placeholder="Enter Description"
          sx={{ marginTop: "1rem" }}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Chip
            label="Category"
            icon={<KeyboardArrowDownTwoToneIcon />}
            variant="outlined"
          />
          <Chip label="Tag 1" variant="outlined" />
          <Chip label="Tag 2" variant="outlined" />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", backgroundColor: "#334D6E" }}>
        <Button
          onClick={handleUploadClick}
          sx={{
            color: "#FFFFFF",
            textTransform: "none",
          }}
        >
          <UploadIcon />
          Upload Images
        </Button>
      </Box>
    </Box>
  );
};

export default AssetDetails;
