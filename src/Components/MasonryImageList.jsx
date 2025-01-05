import {
  ImageList,
  ImageListItem,
  Box,
  TextField,
  Button,
} from "@mui/material";
import SortingBar from "./SortingBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MasonryImageList() {
  const navigate = useNavigate();
  const croppedImages = useSelector((state) => state.assets.croppedImages);

  console.log(croppedImages);

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Search Assets"
            size="small"
            sx={{ width: "600px", margin: "10px" }}
          />
          <Box sx={{ margin: "1rem" }}>
            <SortingBar />
          </Box>
        </Box>

        <Box>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="primary"
          >
            + Add
          </Button>
        </Box>
      </Box>

      <ImageList variant="masonry" cols={3} gap={16}>
        {croppedImages.length > 0 ? (
          croppedImages.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image}
                alt={`Cropped Image ${index + 1}`}
                loading="lazy"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />
            </ImageListItem>
          ))
        ) : (
          <Box>No cropped images available.</Box>
        )}
      </ImageList>
    </Box>
  );
}

export default MasonryImageList;
