import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import MapView from "../components/MapView";

function HomePage() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Police Zone Management System
      </Typography>

      <Paper elevation={3} sx={{ padding: "20px", marginBottom: "30px" }}>
        <Typography variant="h5" gutterBottom>
          Crime Mapping & Visualization
        </Typography>
        <MapView />
      </Paper>
    </Box>
  );
}

export default HomePage;
