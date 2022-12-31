import React from 'react';
import { useDispatch } from 'react-redux';
import {IconButton,Dialog,DialogTitle,Grid,TextField,Button,Box,DialogContent} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {addNews} from "../services/actions/news"

const NewsForm = (params) =>{
    console.log(params);
    const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
     ...params.defaultValues
    },
    onSubmit: (values) => {
        console.log(values);
     dispatch(addNews({...values}))
     params.handleClose()
    },
  });
  
  return (
    <Box sx={{p:3}}>
      <form onSubmit={formik.handleSubmit} >
        <Grid container rowGap={2}>
            <TextField
            fullWidth
            id="headers"
            name="headers"
            label="Başlık"
            value={formik.values.headers}
            onChange={formik.handleChange}
          />
          <TextField
            fullWidth
            id="contents"
            name="contents"
            label="İçerik"
            value={formik.values.contents}
            onChange={formik.handleChange}
          />

         
           <Button color="primary" variant="contained" fullWidth onClick={()=>{params.handleClose()}}>
            Kapat
          </Button>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Ekle
          </Button>
        </Grid>
      </form>
    </Box>
  );
  }

export const NewsDialog = (props) =>{
    const {Icon} = props
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <>
        <Box onClick={handleClickOpen}>{Icon}</Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{textAlign:"center"}}>
            Haber
          </DialogTitle>
          <DialogContent>
            <Grid container>
                <NewsForm handleClose={handleClose} defaultValues={{...props.val}}/>
            </Grid>
          </DialogContent>
        </Dialog>
      </>
    );         
}