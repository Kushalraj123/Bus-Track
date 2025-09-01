import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value, color = "primary" }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" color={color}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
