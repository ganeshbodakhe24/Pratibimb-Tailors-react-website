import React from 'react'
import link_not_present_img from "../Utilities/404_page-not-found.png"
import { Box, Button, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Page_not_found() {
    const Navigate=useNavigate();
function clickHandler(){
  Navigate("/")
}
  return (
   <>
   <Box sx={{marginTop:"120px",}}>
   <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
   <Button 
        variant="outlined"
       sx={{width:"200px",height:"50px",borderRadius:"10px"}}
        color="success"
        onClick={clickHandler}
   >
     Go To Home Page</Button>
   </Box>
   <br></br>
   
    <CardMedia 
    component='img'
    width='auto'
    height={"auto"}
    image={link_not_present_img}
    alt='404_not_present'
    >
    </CardMedia>
   
<br></br>
   </Box>
   </>
  )
}

export default Page_not_found
