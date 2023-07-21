import React from "react";
import { Container } from "@mui/material";
import PropTypes from "prop-types";

const PageWrapper = (props) => {
  const { children, className } = props;
  return (
    <Container className={className} maxWidth="xl" sx={{ py: "1rem" }}>
      {children}
    </Container>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageWrapper;
