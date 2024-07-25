import React from 'react'
import img_1 from "../Utilities/fassion_img_1.jpg";
import img_2 from "../Utilities/fasion_img_2.jpg";
// material ui
import { Box, Typography, Button, Grid } from "@mui/material";
// material ui end
import Home_css from "./Home.module.css";
function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <h1>Blog</h1>
     
      {/* cards title*/}
      <div
        style={{ marginTop: "100px", textAlign: "center", overflow: "hidden" }}
      >
        <Typography variant="h2">Our Blogs</Typography>
      </div>
      {/* card 1*/}
      <Grid container sx={{ px: 10, overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            src={img_2}
            alt="img1"
            height="auto"
            style={{ maxHeight: "400px" }}
          ></img>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <Typography variant="h4">BROWSE OUR SELECTION</Typography>
          <br></br>
          <Typography variant="p" style={{ fontSize: "25px" }}>
            Whether it's that one dress shirt you've dreamed about, an exclusive
            suit for that special event, or a pair of chinos with a really great
            fit, we've got you covered.
          </Typography>
        </Grid>
      </Grid>

      {/* card2 */}
      <Grid container sx={{ px: 10, overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          sx={{
            mt: 10,
            display:"flex"
          }}
          md={6}
         
        >
          <div  className={Home_css.card_text_toggle}>
          <Typography variant="h4">BROWSE OUR SELECTION</Typography>
          <br></br>
          <Typography
            variant="p"
            sx={{ fontSize: "25px", textAlign: "justify" }}
          >
            Whether it's that one dress shirt you've dreamed about, an exclusive
            suit for that special event, or a pair of chinos with a really great
            fit, we've got you covered.
          </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            src={img_2}
            alt="img1"
            height="auto"
            style={{ maxHeight: "400px" }}
          ></img>
        </Grid>
      </Grid>


      <Grid
          item
          xs={12}
          md={6}
         sx={{mx:10}}
        >
          <div  className={Home_css.card_text_toggle_2}>
          <Typography variant="h4">BROWSE OUR SELECTION</Typography>
          <br></br>
          <Typography
            variant="p"
            sx={{ fontSize: "25px", textAlign: "justify" }}
          >
            Whether it's that one dress shirt you've dreamed about, an exclusive
            suit for that special event, or a pair of chinos with a really great
            fit, we've got you covered.
          </Typography>
          </div>
        </Grid>

      {/* card 3*/}
      <Grid container sx={{ px: 10, overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            src={img_2}
            alt="img1"
            height="auto"
            style={{ maxHeight: "400px" }}
          ></img>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <Typography variant="h4">BROWSE OUR SELECTION</Typography>
          <br></br>
          <Typography variant="p" style={{ fontSize: "25px" }}>
            Whether it's that one dress shirt you've dreamed about, an exclusive
            suit for that special event, or a pair of chinos with a really great
            fit, we've got you covered.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Blog
