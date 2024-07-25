import React from "react";
import Grid from "@mui/material/Grid";
import Footer_css from "./Footer.module.css";

//material ui
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Typography,
  Divider,
} from "@mui/material";
//material ui end

// icons
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";

// social medial
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from '@mui/icons-material/Copyright';
// icons end

//img
import logo_img from "../Utilities/logo_without_bg.png";
//img end
function Footer() {
  return (
    <>
      <div className={Footer_css.outer_box}>
        <Grid container spacing={0}>
          <Grid item md={3} sx={{ background: "inherit" }}>
            <div sx={{ background: "inherit" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  maxheight="140"
                  image={logo_img}
                  alt="logo_img"
                ></CardMedia>
              </CardActionArea>
            </div>

            <Divider
              sx={{ margin: "30px", display: { sm: "block", md: "none" } }}
            ></Divider>
            <br></br>

            <div sx={{ background: "inherit" }}>
              <CardActionArea>
                <CardContent>
                  <Typography sx={{ m: 3.4 }} variant="h4">
                    <span className={Footer_css.footer_quote}>
                      Your style, your fit, perfectly tailored every time
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>

            <Divider
              sx={{ margin: "30px", display: { sm: "block", md: "none" } }}
            ></Divider>

          </Grid>

          {/* second grid */}

          <Grid item xs={12} sm={12} md={3} sx={{ background: "inherit" }}>
            <Box sx={{ m: 6, background: "inherit" }}>
              <Typography className={Footer_css.content_box} variant="text">
                Content
              </Typography>
              <br></br>

              <Divider
                sx={{ width: "120px", height: "2px", background: "blue" }}
              ></Divider>

              <Button
                sx={{ width: "100%", height: "60px", color: "#3C1A5B" }}
                startIcon={<HomeIcon />}
                variant="text"
              >
                <Typography sx={{ fontSize: "20px" }}>Home</Typography>
              </Button>
              <Divider></Divider>

              <Button
                sx={{ width: "100%", height: "60px", color: "#3C1A5B" }}
                startIcon={<InfoOutlinedIcon />}
                variant="text"
              >
                <Typography sx={{ fontSize: "20px" }}>About Us</Typography>
              </Button>
              <Divider></Divider>

              <Button
                sx={{ width: "100%", height: "60px", color: "#3C1A5B" }}
                startIcon={<CallEndOutlinedIcon />}
                variant="text"
              >
                <Typography sx={{ fontSize: "20px" }}>Contact</Typography>
              </Button>
              <Divider></Divider>

              <Button
                sx={{ width: "100%", height: "60px", color: "#3C1A5B" }}
                startIcon={<EmojiPeopleOutlinedIcon />}
                variant="text"
              >
                <Typography sx={{ fontSize: "20px" }}>Blogs</Typography>
              </Button>
              <Divider></Divider>

              <Button
                sx={{ width: "100%", height: "60px", color: "#3C1A5B" }}
                startIcon={<CollectionsIcon />}
                variant="text"
              >
                <Typography sx={{ fontSize: "20px" }}>Gallery</Typography>
              </Button>
              <Divider></Divider>

            </Box>


            <Divider
              sx={{ margin: "30px", display: { sm: "block", md: "none" } }}
            ></Divider>
          </Grid>


          {/* social medial */}
          
          <Grid item xs={12} sm={12} md={2} sx={{ background: "" }}>
            <Box
              sx={{
                m: 3,
                width: "70%",
                background: "inherit",
                display: "inline-block",
                justifyContent: "center",
              }}
            >
              <Typography className={Footer_css.content_box} variant="text">
                Social Media
              </Typography>
              <br></br>

              <Divider
                sx={{ width: "100px", height: "2px", background: "blue" }}
              ></Divider>

              <IconButton size="large">
                <WhatsAppIcon size="inherit" />
              </IconButton>
              <IconButton size="large">
                <XIcon />
              </IconButton>
              <IconButton size="large">
                <InstagramIcon />
              </IconButton>

            </Box>

            <Divider
              sx={{ margin: "30px", display: { sm: "block", md: "none" } }}
            ></Divider>

            {/* location map */}
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ background: "inherit" }}>
            <Box
              sx={{
                m: 3,
                width: "90%",
                background: "inherit",
                display: "inline-block",
                justifyContent: "center",
              }}
            >
              <Typography className={Footer_css.content_box} variant="text">
                Location
              </Typography>
              <br></br>
              <Divider
                sx={{ width: "120px", height: "2px", background: "blue" }}
              ></Divider>
              <br></br>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30115.904087360133!2d75.19641356292254!3d19.348010837591687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb69c3f6929bf5%3A0x5d0bb5a98f5f3088!2sShevgaon%2C%20Maharashtra%20414502!5e0!3m2!1sen!2sin!4v1721454299534!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        <Divider></Divider>
      </div>
      <div>
        <Box
          className={Footer_css.copy_right_text}
        >
          
          <CopyrightIcon sx={{fontSize:"30px"}}/>
          <Typography variant="h5" > All Rights are reserved by Bodakhe Ganesh</Typography>
        </Box>
      </div>
    </>
  );
}

export default Footer;
