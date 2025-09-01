import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Reports = () => {
  // TODO: Fetch real report data from API
  const fuelCostData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      { label: "Fuel Cost", data: [1200, 1500, 900, 1700, 1400], borderColor: "blue" },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Fuel Cost Trend</Typography>
            <Line data={fuelCostData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Occupancy Rate (Coming Soon)</Typography>
            <p>Placeholder for occupancy chart</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;
