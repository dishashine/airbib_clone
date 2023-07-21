import React from "react";
import { Card, CardContent, Box, Skeleton, Grid } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Grid item justifyContent="center" display="flex" md={4} sm={6} xs={12}>
      <Card
        sx={{
          width: "60%",
          margin: 2,
          height: "auto",
          boxShadow: "none",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Skeleton
            variant="rectengular"
            sx={{
              borderRadius: "15px",
              objectFit: "cover",
              height: "12rem",
              border: "0.5px solid #d7d7d7",
              width: "99%",
            }}
          />
        </Box>
        <CardContent>
          <Skeleton />
          <Skeleton width="50%" sx={{ mr: "auto", ml: "auto" }} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardSkeleton;
