import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";



// import gallery_1 from "../Utilities/Gallery/gallery_1.jpeg";
// import gallery_2 from "../Utilities/Gallery/gallery_2.jpeg";
// import gallery_3 from "../Utilities/Gallery/gallery_3.jpg";
// import gallery_4 from "../Utilities/Gallery/gallery_4.jpeg";
// import gallery_5 from "../Utilities/Gallery/gallery_5.jpeg";
// import gallery_6 from "../Utilities/Gallery/gallery_6.jpeg";
// import gallery_7 from "../Utilities/Gallery/gallery_7.jpeg";
// import gallery_8 from "../Utilities/Gallery/gallery_8.jpeg";
// import gallery_9 from "../Utilities/Gallery/gallery_9.jpeg";
// import gallery_10 from "../Utilities/Gallery/gallery_10.jpeg";
// import gallery_11 from "../Utilities/Gallery/gallery_11.webp";
// import gallery_12 from "../Utilities/Gallery/gallery_12.webp";

function Gallery() {
 
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageList
          sx={{ width: "auto", height: "auto" }}
          cols={3}
          rowHeight={"auto"}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                // src='/Gallery/gallery_1.jpeg'
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/*  */}
      </Box>
    </>
  );
}
// const itemData1 = [
//   {
//     img: gallery_1,
//     title: "gallery_1",
//   },
//   {
//     img: gallery_2,
//     title: "gallery_2",
//   },
//   {
//     img: gallery_3,
//     title: "gallery_3",
//   },
//   {
//     img: gallery_4,
//     title: "gallery_4",
//   },
//   {
//     img: gallery_5,
//     title: "gallery_5",
//   },
//   {
//     img: gallery_6,
//     title: "gallery_6",
//   },
//   {
//     img: gallery_7,
//     title: "gallery_7",
//   },
//   {
//     img: gallery_8,
//     title: "gallery_8",
//   },
//   {
//     img: gallery_9,
//     title: "gallery_9",
//   },
//   {
//     img: gallery_10,
//     title: "gallery_10",
//   },
//   {
//     img: gallery_11,
//     title: "gallery_11",
//   },
//   {
//     img: gallery_12,
//     title: "gallery_12",
//   },
// ];

const itemData = [
  {
    img: "/Gallery/gallery_1.jpeg",
    title: "gallery_1",
  },
  {
    img: "/Gallery/gallery_2.jpeg",
    title: "gallery_2",
  },
  {
    img: "/Gallery/gallery_3.jpg",
    title: "gallery_3",
  },
  {
    img: "/Gallery/gallery_4.jpeg",
    title: "gallery_4",
  },
  {
    img: "/Gallery/gallery_5.jpeg",
    title: "gallery_5",
  },
  {
    img: "/Gallery/gallery_6.jpeg",
    title: "gallery_6",
  },
  {
    img: "/Gallery/gallery_7.jpeg",
    title: "gallery_7",
  },
  {
    img: "/Gallery/gallery_8.jpeg",
    title: "gallery_8",
  },
  {
    img: "/Gallery/gallery_9.jpeg",
    title: "gallery_9",
  },
  {
    img: "/Gallery/gallery_10.jpeg",
    title: "gallery_10",
  },
  {
    img: "/Gallery/gallery_11.webp",
    title: "gallery_11",
  },
  {
    img: "/Gallery/gallery_12.webp",
    title: "gallery_12",
  },
];

export default Gallery;
