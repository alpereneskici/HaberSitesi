
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {Box,Button,TextField,Grid} from "@mui/material"

import { useDispatch } from 'react-redux';

import { login } from '../../../services/actions/auth';
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Must be a valid email').max(255)
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginMain = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values.email,values.password))
    },
  });

  return (
    <Box sx={{p:3}}>
      <form onSubmit={formik.handleSubmit} >
        <Grid container rowGap={2}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Eposta"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            Giriş Yap
          </Button>
        </Grid>
      </form>
    </Box>
  );
};



export default LoginMain