import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Drawer,
  TextField,
  Chip,
} from "@mui/material";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import AddIcon from "@mui/icons-material/Add";
import BoxImage from "../../public/assets/Frame.png";

const AddImage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setDrawerOpen(true);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={BoxImage}
        alt="BoxImage"
        sx={{ width: "150px", mb: 2 }}
      />

      <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>
        Add Assets here
      </Typography>

      <Button
        variant="contained"
        component="label"
        startIcon={<AddIcon />}
        sx={{
          backgroundColor: "#2c3e50",
          "&:hover": { backgroundColor: "#34495e" },
        }}
      >
        Add
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "95vw",
            height: "100vh",
            overflow: "hidden",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: 2,
            textAlign: "left",
            color: "#334D6E ",
            fontWeight: 500,
          }}
        >
          Add Asset
        </Typography>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              height: "85%",
              flex: 2,
              padding: 2,
            }}
          >
            {selectedImage ? (
              <Box
                component="img"
                src={selectedImage}
                alt="Uploaded Preview"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 1,
                  mb: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            ) : (
              <Typography variant="body2" sx={{ color: "gray" }}>
                No image selected
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              padding: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space between",
              height: "85%",
            }}
          >
            <Box sx={{ flexGrow: "1" }}>
              <Box
                sx={{
                  border: "1px solid #E7E7EB",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    padding: 1,
                  }}
                >
                  Asset 001
                </Typography>
              </Box>

              <TextField
                fullWidth
                variant="outlined"
                multiline
                minRows={4}
                placeholder="Enter Description"
                sx={{
                  marginTop: "1rem",
                }}
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
                  label="Chip Outlined"
                  icon={<KeyboardArrowDownTwoToneIcon />}
                  variant="outlined"
                  iconPosition="end"
                />
                <Chip label="Chip Outlined" variant="outlined" />
                <Chip label="Chip Outlined" variant="outlined" />
                <Chip label="Chip Outlined" variant="outlined" />
              </Box>
            </Box>
            <Box sx={{}}>
              <Button>Upload</Button>
            </Box>
          </Box>
        </Box>
        {/* 
        <Button variant="contained" color="error" onClick={toggleDrawer(false)}>
          Close
        </Button> */}
      </Drawer>
    </Box>
  );
};

export default AddImage;
