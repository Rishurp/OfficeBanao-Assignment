import { Drawer, Typography, Box } from "@mui/material";
import AssetPreview from "./AssetPreview";
import AssetDetails from "./AssetDetails";

const DrawerContent = ({ selectedImage, drawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: "95vw",
          height: "100vh",
          overflow: "auto",
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
        <AssetPreview selectedImage={selectedImage} />
        <AssetDetails src={selectedImage} />
      </Box>
    </Drawer>
  );
};

export default DrawerContent;
