import { Container, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import React from "react";

const AdminHomePage = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default AdminHomePage