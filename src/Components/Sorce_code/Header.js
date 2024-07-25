import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
// icons
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import ListIcon from "@mui/icons-material/List";
// icons end

// css file
import Header_css from "./Header.module.css";
// css file

// logo img
import logo_without_bg from "../Utilities/logo_without_bg.png";
// logo img end


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [page, setPage] = useState(0);
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function NavigationHandle(e, val) {
    setPage(val);
    if (val == 0) {
      Navigate("/");
    } else if (val == 1) {
      Navigate("/aboutus");
    } else if (val == 2) {
      Navigate("/contactus");
    } else if (val == 3) {
      Navigate("/blogs");
    } else if (val == 4) {
      Navigate("/gallery");
    } else {
      Navigate("/404_not_found");
    }
  }

  
  return (
    <>
      <AppBar style={{ position: "absolute", overflow: "hidden" }}>
        <Toolbar className={Header_css.nav_bar}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src={logo_without_bg}
              alt="logo"
              className={Header_css.small_logo}
            ></img>
          </Box>

          <Tabs
            sx={{ marginLeft: "auto", display: { xs: "none", md: "block" } }}
            textColor=""
            indicatorColor="primary"
            value={page}
            className={Header_css.link_color}
            onChange={NavigationHandle}
          >
            <Tab icon={<HomeIcon />} label="Home"></Tab>

            <Tab icon={<InfoOutlinedIcon />} label="About Us"></Tab>

            <Tab icon={<CallEndOutlinedIcon />} label="Contact Us"></Tab>

            <Tab icon={<EmojiPeopleOutlinedIcon />} label="Blogs"></Tab>

            <Tab icon={<CollectionsIcon />} label="Gallery"></Tab>
          </Tabs>

          {/* in small device menu button  */}
          <Box style={{ hight: "100%" }}>
            <IconButton
              size="large"
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  color: "black",
                  marginRight: "auto",
                },
              }}
              onClick={toggleDrawer(true)}
            >
              <ListIcon fontSize="large"></ListIcon>
            </IconButton>
          </Box>
          <Box
            className={Header_css.small_logo_xs}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <img src={logo_without_bg} alt="logo"></img>
          </Box>
        </Toolbar>
      </AppBar>
  
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{display: { xs: 'block', md: 'none' }}}>
        <Box
          sx={{ width: 250, display: "flex" }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List style={{ width: "100%" }}>
            <Tabs
              textColor=""
              indicatorColor="primary"
              value={page}
              className={Header_css.link_color}
              onChange={NavigationHandle}
              orientation="vertical"
            >
              <Tab icon={<HomeIcon />} label="Home" value={0}></Tab>
              <Divider variant="middle" component="li" ></Divider>

              <Tab icon={<InfoOutlinedIcon />} label="About Us" value={1}></Tab>
              <Divider variant="middle" component="li"></Divider>

              <Tab icon={<CallEndOutlinedIcon />} label="Contact Us" value={2}></Tab>
              <Divider variant="middle" component="li"></Divider>

              <Tab icon={<EmojiPeopleOutlinedIcon />} label="Blogs" value={3}></Tab>
              <Divider variant="middle" component="li"></Divider>

              <Tab icon={<CollectionsIcon />} label="Gallery" value={4}></Tab>
              <Divider variant="middle" component="li"></Divider>
            </Tabs>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default Header;
