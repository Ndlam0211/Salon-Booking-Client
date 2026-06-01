import React from 'react'
import { Container, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Auth/action';

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            role: "CUSTOMER"
        },
        onSubmit: (values) => {
            console.log("Signup form submitted with values:", values);
            // Dispatch register action here
            dispatch(register({
               data: values,
               navigate
            }));
        },
    });

  return (
    <Container component={"main"} maxWidth="xs">
        <div className="space-y-5">
            <Typography className="text-center" variant="h5">
                Signup
            </Typography>
            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                <TextField
                    variant="outlined"
                    fullWidth
                    name="username"
                    id="username"
                    label="Username"
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    name="email"
                    id="email"
                    label="Email"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button sx={{py:".8rem"}} type="submit" variant="contained" fullWidth>
                    Signup
                </Button>
            </form>
        </div>
    </Container>
  )
}

export default SignupForm