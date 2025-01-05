import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ImageUploadButton from "./ImageUploadButton";
import DrawerContent from "./DrawerContent";


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
        src="/assets/Frame.png"
        alt="BoxImage"
        sx={{ width: "150px", mb: 2 }}
      />
      <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>
        Add Assets here
      </Typography>
      <ImageUploadButton onFileChange={handleFileChange} />
      <DrawerContent
        selectedImage={selectedImage}
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </Box>
  );
};

export default AddImage;
