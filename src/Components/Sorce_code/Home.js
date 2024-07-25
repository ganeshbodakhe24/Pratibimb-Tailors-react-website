import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  Divider,
} from "@mui/material";
import Home_css from "./Home.module.css";
// images
import card_1_img from "../Utilities/fassion_img_1.jpg";
import info_img_1 from '../Utilities/Home/info_img_1.png';
import info_bg_1 from '../Utilities/Home/shape_1.png';
//images end
function Home() {
  return (
    <>
      {/* banner */}
      <div className={Home_css.margin_top}></div>
      <Box className={Home_css.banner}>
        <Typography
          sx={{
            fontSize: "50px",
            wordSpacing: "4px",
          }}
        >
          Custom <span className={Home_css.span_text}>Suits ,</span> <br />
          Unmatched <span className={Home_css.span_text}>Quality</span>
        </Typography>

        <span className={Home_css.button}>
          <Button variant="outlined">Blogs</Button>
          <Button variant="outlined"> Contact Us</Button>
        </span>
        <br></br>
        <br></br>
        <Typography variant="h5" sx={{ lineHeight: "45px" }}>
          CUSTOM SHIRTS THAT FIT LIKE A <br /> DREAM WITHOUT BREAKING THE BANK.
        </Typography>
      </Box>

      {/* cards heading*/}
      <div className={Home_css.title}>
        <Typography variant="h3" >Blogs</Typography>
        <Divider sx={{ height: "2px", background: "blue", width: "160px" }}></Divider>
      </div>

      {/* card */}
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <div className={Home_css.card_outer}>
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "space-around" }}>
            <Grid
              item
              xs={10}
              sm={10}
              md={4}
              xl={4}
              sx={{ background: "", my: 5, p: 0 }}
            >
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="card1"
                    image={card_1_img}
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <br></br>
                    <Divider></Divider>
                    <br /><br></br>
                    <Typography sx={{ fontSize: "20px" }}>
                      There are many things in life we don't control over, and that
                      includes height. Using clothes to enhance your appearance is
                      common. Although we're all perfect just the way we are,
                      there's no shame in putting that extra effort into dressing
                      well according to your
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* second */}
            <Grid
              item
              xs={10}
              sm={10}
              md={4}
              xl={4}
              sx={{ background: "", my: 5, p: 0 }}
            >
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="card1"
                    height="auto"
                    image={card_1_img}
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <br></br>
                    <Divider></Divider>
                    <br /><br></br>
                    <Typography sx={{ fontSize: "20px" }}>
                      There are many things in life we don't control over, and that
                      includes height. Using clothes to enhance your appearance is
                      common. Although we're all perfect just the way we are,
                      there's no shame in putting that extra effort into dressing
                      well according to your
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Third */}
            <Grid
              item
              xs={10}
              sm={10}
              md={4}
              xl={4}
              sx={{ background: "", my: 5, p: 0 }}
            >
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="card1"
                    height="auto"
                    image={card_1_img}
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <br></br>
                    <Divider></Divider>
                    <br /><br></br>
                    <Typography sx={{ fontSize: "20px" }}>
                      There are many things in life we don't control over, and that
                      includes height. Using clothes to enhance your appearance is
                      common. Although we're all perfect just the way we are,
                      there's no shame in putting that extra effort into dressing
                      well according to your
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>



      {/* info */}
      {/* <div sx={{ mt: 10 }}>
        <Grid container>
          <Grid item lg={4} sx={{ background: "yellow" }} >
            <div className={Home_css.left_info_img_out}>
            <img className={Home_css.left_info_img} src={info_img_1} alt="info_img_1"width={"35%"}></img>
            <img className={Home_css.left_info_bg} src={info_bg_1} alt="info_bg_1" width={"100%"} ></img>
            
            </div>
          
          </Grid>
        </Grid>
      </div> */}
      {/*  */}
    </>
  );
}

export default Home;
