import React from "react";
import { Outlet } from "react-router-dom";
import { Divider, experimentalStyled } from "@mui/material";
// import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const MainWrapper = experimentalStyled("div")(() => ({
  minHeight: "calc(100vh - 40vh)",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(() => ({
  display: "block",
  flex: "1 1 auto",
  overflow: "hidden",
  marginTop: "80px",
  width: "100%",
}));

const Layout = () => {
  return (
    <React.Fragment>
      <MainWrapper>
        <Navbar />
        <Divider
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        />
        <PageWrapper sx={{ mt: "103px" }} className="main-body-content">
          <Outlet />
        </PageWrapper>
      </MainWrapper>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
