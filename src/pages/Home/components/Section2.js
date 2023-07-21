import React, { useState } from "react";
import PageWrapper from "../../../components/wrapper/PageWreapper";
import {
  OutlinedInput,
  Grid,
  Box,
  InputAdornment,
  Typography,
  CardMedia,
  useMediaQuery,
  Chip,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import CustomCard from "../../../components/ui/CustomCard";

const item = [
  {
    id: 1,
    name: "Kerala,india",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=320",
  },
  {
    id: 2,
    name: "Lonavla,india",
    km: "1000 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/f33d1f29-3003-4545-aa92-8adfa592b4f8.jpeg?im_w=320",
  },
  {
    id: 3,
    name: "Akshi",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=320",
  },
  {
    id: 4,
    name: "mahan",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/724a57b5-3670-412c-8a9c-d363018880e3.jpeg?im_w=720",
  },
  {
    id: 5,
    name: "USA",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-669134847280018335/original/724a57b5-3670-412c-8a9c-d363018880e3.jpeg?im_w=720",
  },

  {
    id: 6,
    name: "dubai",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=320",
  },
  {
    id: 7,
    name: "dubai",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=320",
  },
  {
    id: 8,
    name: "Bali",
    km: "45 kilometer away",
    date: "31 jul - 5 aug",
    price: "RS. 17,499 night",
    image:
      "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=320",
  },
];

const Section2 = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [promptItem, setPromtItem] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const [subCategoryList, setSubCategoryList] = useState([]);

  const matches = useMediaQuery("(max-width:899px)");
  const array = [1, 2, 3, 4, 5, 6];

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PageWrapper>
      <Grid
        container
        spacing={2}
        sx={{ mt: "100px" }}
        className="left-sidebar-section"
      >
        <Grid
          elevation={3}
          item
          md={3}
          lg={2}
          xl={2}
          xs={12}
          display={subCategoryList?.length ? "block" : "none"}
          className="left-s"
        >
          {matches ? (
            //  How about a drop-down ?
            <Grid
              sx={{
                position: "fixed",
                zIndex: 50,
                backgroundColor: "white",
                marginTop: { xs: "-90px", md: "0px" },
              }}
              display={subCategoryList?.length ? "flex" : "none"}
              alignItems={"center"}
              width="90%"
            >
              {subCategoryList?.length ? (
                <>
                  <Chip
                    label="All"
                    onClick={() => {}}
                    variant={!categoryId ? "contained" : "outlined"}
                    sx={{
                      bgcolor: !categoryId
                        ? (theme) => theme.palette.primary.main
                        : "",
                      fontSize: "15px",
                      mr: 0.5,
                    }}
                  />
                  {/* <Slider {...settings} className="slick-slider-custom">
                    {subCategoryList?.map((category) => (
                      <Box
                        sx={{
                          width: "100%",
                        }}
                        key={category?.id}
                      >
                        <Chip
                          label={category?.name}
                          variant={
                            categoryId === category?.id
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => {
                            onSubCategoryClick(category?.id);
                            setCategoryId(category?.id);
                          }}
                          sx={{
                            bgcolor:
                              categoryId === category?.id
                                ? (theme) => theme.palette.primary.main
                                : null,
                            m: 1,
                            fontSize: "15px",
                          }}
                        />
                      </Box>
                    ))}
                  </Slider> */}
                </>
              ) : null}
            </Grid>
          ) : (
            <Box
              sx={{
                position: "fixed",
                maxHeight: "78%",
                top: "22%",
                bottom: "0%",
              }}
              display={subCategoryList?.length ? "flex" : "none"}
            >
              {subCategoryList?.length ? (
                <Tabs orientation="vertical" variant="scrollable">
                  <Tab
                    label="All"
                    onClick={() => {
                      getData();
                      setCategoryId("");
                    }}
                    sx={{
                      bgcolor: !categoryId
                        ? (theme) => theme.palette.primary.main
                        : "",
                      borderRadius: 1,
                      fontWeight: "bold",
                    }}
                  />
                  {subCategoryList?.map(({ id, name }) => (
                    <Tab
                      label={name}
                      key={id}
                      onClick={() => {
                        onSubCategoryClick(id);
                        setCategoryId(id);
                      }}
                      sx={{
                        bgcolor:
                          categoryId === id
                            ? (theme) => theme.palette.primary.main
                            : null,
                        fontWeight: "bold",
                        borderRadius: 1,
                        width: "auto",
                      }}
                    />
                  ))}
                </Tabs>
              ) : null}
            </Box>
          )}
        </Grid>
        <Grid
          item
          md={subCategoryList?.length ? 9 : 12}
          xs={12}
          lg={10}
          xl={10}
          className="item-list-detail"
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {item?.map((row) => {
              return (
                <Grid
                  item
                  justifyContent="center"
                  display="flex"
                  key={item.id}
                  md={4}
                  sm={6}
                  xs={12}
                  lg={3}
                  xl={3}
                  className="custon-card-section"
                >
                  <CustomCard
                    id={row?.id}
                    image={row?.image}
                    title={row?.name}
                    description={row?.km}
                    date={row?.date}
                    price={row?.price}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <IconButton
            sx={{
              position: "fixed",
              right: "1%",

              zIndex: 999,
              cursor: "pointer",
              color: "black",
              display: visible ? "block" : "none",
              background: "transparent",
            }}
          >
            <ArrowCircleUpIcon
              onClick={scrollToTop}
              sx={{
                fontSize: 30,
                borderRadius: "100%",
              }}
            />
          </IconButton>
        </Box>
      </Grid>
    </PageWrapper>
  );
};

export default Section2;
