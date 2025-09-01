import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  // TODO: Replace with API calls to fetch counts
  const stats = [
    { title: "Total Vehicles", value: 25 },
    { title: "Active Buses", value: 18 },
    { title: "Drivers on Duty", value: 12 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Fleet Dashboard
      </Typography>
      <Grid container spacing={2}>
        {stats.map((s, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography variant="h4" color="primary">
                  {s.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
