import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

export const AuthBox = (props) => {
  return (
    <Box sx={{width:"100%",height:"100vh",backgroundColor:"grey"}}>
        <Grid container sx={{alignItems:"center", justifyContent:"center",height:"100%"}}>
            <Grid item xs={12} sm={8} md={6} lg={4} sx={{p:3,borderRadius:"5px",boxShadow:3,backgroundColor:"#ffffff"}}>
                {props.children}
            </Grid>
        </Grid>
    </Box>
  )
}

export const NewsBox = (props) => {
    return (
      <Box sx={{width:"100%"}}>
          <Grid container sx={{alignItems:"center", justifyContent:"center",posiiton:"relative"}}>
              <Grid item xs={12} sm={10} md={8} lg={6} sx={{p:3,borderRadius:"5px",boxShadow:3,backgroundColor:"#ffffff"}}>
                  {props.children}
              </Grid>
          </Grid>
      </Box>
    )
  }
