import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const ImageUploadButton = ({ onFileChange }) => {
  return (
    <Button
      variant="contained"
      component="label"
      startIcon={<AddIcon />}
      sx={{
        backgroundColor: "#2c3e50",
        "&:hover": { backgroundColor: "#34495e" },
        textTransform: "none",
      }}
    >
      Add
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={onFileChange}
      />
    </Button>
  );
};

export default ImageUploadButton;
