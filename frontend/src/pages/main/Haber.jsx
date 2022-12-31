import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import {Box, Grid } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { NewsDialog } from '../../layouts/MyDialog';
import { deleteNews } from '../../services/actions/news';
const Haber = (props) => {
    const dispatch= useDispatch();
    const isAdmin = useSelector(state=>state.auth.user.Message[0].is_admin)
    const {haber} = props
  return (
    <Grid container sx={{position:"relative"}}>
        <Grid container sx={{position:"absolute",justifyContent:"flex-end",display:isAdmin?"flex":"none"}}>
            
            <Grid item> <NewsDialog val={{contents:"",headers:"",paper_id:haber.paper_id}} Icon={<SettingsIcon/>}/></Grid>
            <Grid item><DeleteIcon onClick={()=>{
                dispatch(deleteNews({paper_id:haber.paper_id}))
            }}/></Grid>
        </Grid>
        <Grid item xs={12} sx={{fontSize:"20px",fontWeight:"bold"}}>{haber.headers}</Grid>
        <Grid item xs={12}>{haber.contents}</Grid>
    </Grid>
  )
}

export default Haber