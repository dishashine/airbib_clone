import React from "react";
import PropTypes from "prop-types";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const CustomCard = (props) => {
  const {
    id,
    onClick,
    image,
    title,
    date,
    price,
    description,
    currentPage = null,
  } = props;

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minWidth: "100%",
        margin: 2,
        height: "auto",
        boxShadow: "none",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          p: 1,
          width: currentPage === "menu" ? "70%" : null,
          mr: "auto",
          ml: "auto",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          src={image}
          sx={{
            borderRadius: "15px",
            objectFit: "cover",
            height: undefined,
            // border: "0.5px solid #d7d7d7",
            width: "100%",
            aspectRatio: "1/1",
            maxHeight: "205px",
            marginLeft: currentPage === "categories" ? "60px" : null,
            mx: "auto",
          }}
        />
      </Box>
      <CardContent sx={{ whiteSpace: "nowrap" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            whiteSpace: "pre-wrap",
            color: "black",
            display: "flex",
          }}
          maxWidth="100%"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{ whiteSpace: "pre-wrap", display: "flex" }}
          maxWidth="100%"
          paragraph={true}
        >
          {description}
        </Typography>
        <Typography
          variant="p"
          sx={{ whiteSpace: "pre-wrap", display: "flex", marginTop: "-10px" }}
          maxWidth="100%"
          paragraph={true}
        >
          {date}
        </Typography>
        <Typography
          variant="p"
          sx={{
            whiteSpace: "pre-wrap",
            display: "flex",
            marginTop: "-10px",
            fontWeight: "bolder",
          }}
          maxWidth="100%"
          paragraph={true}
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};
CustomCard.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  isCategory: PropTypes.bool,
  currentPage: PropTypes.string,
  defaultPrice: PropTypes.string,
  itemQuantity: PropTypes.string,
  multiplePrice: PropTypes.array,
  relevantItems: PropTypes.array,
  handleCartClick: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};
export default CustomCard;
