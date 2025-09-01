import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { logout } = useContext(AuthContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FleetWise Manager
          </Typography>
          <Button component={Link} to="/" color="inherit">Dashboard</Button>
          <Button component={Link} to="/vehicles" color="inherit">Vehicles</Button>
          <Button component={Link} to="/drivers" color="inherit">Drivers</Button>
          <Button component={Link} to="/reports" color="inherit">Reports</Button>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ flexGrow: 1, py: 3 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
