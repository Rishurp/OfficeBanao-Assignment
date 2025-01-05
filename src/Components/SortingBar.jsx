import { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  Radio,
  ListItemText,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SortingBar = () => {
  const [sortOption, setSortOption] = useState("newest");

  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: "white" }}
      >
        <Select
          labelId="sort-label"
          value={sortOption}
          onChange={handleChange}
          IconComponent={ArrowDropDownIcon}
          renderValue={(selected) => {
            // Render only the selected value as text in the Select input
            const displayValues = {
              newest: "Newest First",
              oldest: "Oldest First",
              az: "A-Z",
            };
            return displayValues[selected];
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d1d5db", // Border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6b7280", // Hover border color
            },
            "& .MuiSelect-icon": {
              color: "#6b7280", // Icon color
            },
          }}
        >
          <MenuItem value="newest">
            <Radio
              checked={sortOption === "newest"}
              value="newest"
              sx={{ marginRight: 1 }}
            />
            <ListItemText primary="Newest First" />
          </MenuItem>
          <MenuItem value="oldest">
            <Radio
              checked={sortOption === "oldest"}
              value="oldest"
              sx={{ marginRight: 1 }}
            />
            <ListItemText primary="Oldest First" />
          </MenuItem>
          <MenuItem value="az">
            <Radio
              checked={sortOption === "az"}
              value="az"
              sx={{ marginRight: 1 }}
            />
            <ListItemText primary="A-Z" />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortingBar;
