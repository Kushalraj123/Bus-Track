import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import api from "../api/axios";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await api.get("/vehicles");
        setVehicles(res.data);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Vehicles
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add Vehicle
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bus Number</TableCell>
              <TableCell>License</TableCell>
              <TableCell>Mileage</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((v) => (
              <TableRow key={v._id}>
                <TableCell>{v.busNumber}</TableCell>
                <TableCell>{v.license}</TableCell>
                <TableCell>{v.mileage}</TableCell>
                <TableCell>{v.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Vehicles;
