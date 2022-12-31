import React from 'react';
import { useDispatch } from "react-redux"
import { useFormik } from 'formik';
import * as yup from 'yup';

import {Box,Button,TextField,Grid} from "@mui/material"

import { signup } from '../../../services/actions/auth';
import history from '../../../routers/history';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
    .required('Password is required'),

  first_name: yup
    .string('Enter your username')
    .required('First name is required'),
  last_name: yup
    .string('Enter your username')
    .required('Lastname is required'),
});

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      first_name:'',
      last_name:'',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      if(await dispatch( signup({...values}))){
        history.push("/")
      }else{
        alert("Bir şeyler ters gitti lütfen tekrar deneyiniz, eposta ile daha önce kayıt olmadığınızdan emin olunuz.");
      }

    },
  });

  return (
    <Box sx={{p:3}}>
      <form onSubmit={formik.handleSubmit} >
        <Grid container rowGap={2}>
            <TextField
                fullWidth
                id="first_name"
                name="first_name"
                label="Ad"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
            />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="last_name"
            name="last_name"
            label="Soyad"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          /> 
        <TextField
            fullWidth
            id="password"
            name="password"
            label="Şifre"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Kaydol
          </Button>
        </Grid>
      </form>
    </Box>
  );
};


export default Register