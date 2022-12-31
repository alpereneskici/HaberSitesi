import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Box from "@mui/material/Box"
import LogoutIcon from '@mui/icons-material/Logout';

import {NewsDialog} from "../../layouts/MyDialog"

import Haberler from './Haberler'
import { logOut } from '../../services/actions/auth';



const HaberlerAdmin = () => {
    const isAdmin = useSelector(state=>state.auth.user.Message[0].is_admin)
    const dispatch = useDispatch()
  return (
    <Box>    
        <Box sx={{position:"fixed",p:3}}><LogoutIcon onClick={()=>{
            dispatch(logOut())
        }}/></Box>
        <Haberler/>
       {isAdmin ? <NewsDialog val={{contents:"",headers:"",paper_id:false}} Icon={<AddCircleIcon sx={{fontSize:"40px"}}/>}/>:<></>} 
    </Box>

  )
}

export default HaberlerAdmin