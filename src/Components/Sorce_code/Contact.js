import React from "react";
import Contact_css from "./Contact.module.css";
import axios from "axios";
// import useState from 'react';

import { useState } from "react";

//material import
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
//material import end


import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

// image
import msg_img from "../Utilities/Contact_us/msg_png.png";
// image end

function Contact() {
  // data send
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [responseMsg, setResponseMessage] = useState(false);
  const [submitPress, setSubmitPress] = useState(false);
  const [submitEror, setSubmitError] = useState(false);


  //function start
  function submitHandler(e) {
    e.preventDefault();
    setSubmitPress(true);
    // console.log("fname length",fname.length)
    if (fname.length == 0 || email.length == 0 || msg.length == 0) {
      setSubmitPress(false);
      setSubmitError(true);
      return
    }
    let data = { "name": fname, "email": email, "msg": msg };
    data = JSON.stringify(data)
    console.log(data)

    axios.post('http://localhost:5000/msg', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // console.log('Server response:', response.data);
        setResponseMessage(true);
      })
      .catch(error => {
        console.error('There was an error sending the form data!', error);
      });
    setFname('');
    setEmail('');
    setMsg('');
    setSubmitError(false);
  }
  // data send end

  return (
    <>
      <div style={{ height: "90px" }}></div>
      {submitPress ? responseMsg ? <Alert>Message sent properly.</Alert> : <Alert severity="error">Error sending message.</Alert> : ''}
      {submitEror ? <Alert severity="error">Error sending message.</Alert> : ''}
      <Box sx={{ width: "90%", textAlign: "right", my: 2 }}>
        {/* img  */}
        <img src={msg_img} style={{ height: "250px" }} alt="msg img"></img>
      </Box>

      <Box variant="div" className={Contact_css.contact_outer}>
        <TableContainer
          component={Paper}
          sx={{
            width: "50%",
            minWidth: "100px",
            maxWidth: "800px",
            "@media (max-width:700px)": {
              width: "90%",
            },
          }}
        >
          <form>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="h3">Message Us</Typography>
                    <Divider
                      sx={{
                        width: "280px",
                        my: 2,
                        height: "3px",
                        background: "black",
                      }}
                    ></Divider>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Full Name</TableCell>
                  <TableCell>
                    <TextField
                      sx={{ width: "100%" }}
                      id="fname"
                      type="text"
                      name="fname"
                      label="Full Name"
                      variant="outlined"
                      required
                      value={fname}
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>
                    <TextField
                      sx={{ width: "100%" }}
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Message</TableCell>
                  <TableCell>
                    <textarea className={Contact_css.textarea} placeholder="Put Your message"
                      value={msg}
                      onChange={(e) => {
                        setMsg(e.target.value)
                      }} required></textarea>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} style={{ textAlign: "center", width: "100%" }}>
                    <Button type="submit" color="primary" onClick={submitHandler} style={{ width: "80%", height: "60px" }} variant="outlined">Submit</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </form>
        </TableContainer>
      </Box>
    </>
  );
}

export default Contact;
