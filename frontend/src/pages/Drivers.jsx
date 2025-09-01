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

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await api.get("/drivers");
        setDrivers(res.data);
      } catch (err) {
        console.error("Error fetching drivers:", err);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Drivers
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add Driver
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Blood Group</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((d) => (
              <TableRow key={d._id}>
                <TableCell>{d.name}</TableCell>
                <TableCell>
                  {d.dob ? new Date(d.dob).toLocaleDateString() : "-"}
                </TableCell>
                <TableCell>{d.bloodGroup}</TableCell>
                <TableCell>{d.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Drivers;
