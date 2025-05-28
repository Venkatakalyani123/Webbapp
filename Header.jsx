import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" fontWeight={600}>
        Healthcare Dashboard
      </Typography>
    </Box>
  );
};

export default Header;
