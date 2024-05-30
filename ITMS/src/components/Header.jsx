import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ border: " 1px solid black", padding: "2rem" }}>
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="\Icons\ITMS.jpg"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <Typography variant="h4">ITMS</Typography>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link>
            <Typography variant="h4">Home</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
