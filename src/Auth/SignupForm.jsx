import React from 'react'
import { Container, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Auth/actions';

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            role: "CUSTOMER"
        },
        onSubmit: (values) => {
            console.log("Signup form submitted with values:", values);
            // Dispatch register action here
            dispatch(register({
                data: {
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                    role: values.role
                },
                navigate: navigate
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
                    name="fullName"
                    id="fullName"
                    label="Full Name"
                    required
                    value={formik.values.fullName}
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