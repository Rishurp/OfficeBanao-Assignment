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
  const assetImages = useSelector((state) => state.assets.images);

  console.log(assetImages);

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
            sx={{
              backgroundColor: "#2c3e50",
              "&:hover": { backgroundColor: "#34495e" },
              textTransform: "none",
            }}
          >
            + Add
          </Button>
        </Box>
      </Box>

      <ImageList variant="masonry" cols={3} gap={16}>
        {assetImages.length > 0 ? (
          assetImages.map((image, index) => (
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
          <Box>No images available.</Box>
        )}
      </ImageList>
    </Box>
  );
}

export default MasonryImageList;
