import React from 'react'
import { Container, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Auth/action';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log("Login form submitted with values:", values);
            // Dispatch login action here
            const redirect = searchParams.get("redirect")
            dispatch(login({
                loginData: values,
                navigate,
                redirect
            }, ));
        },
    });

  return (
    <Container component={"main"} maxWidth="xs">
        <div className="space-y-5">
            <Typography className="text-center" variant="h5">
                Login
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
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button sx={{py:".8rem"}} type="submit" variant="contained" fullWidth>
                    Login
                </Button>
            </form>
        </div>
    </Container>
  )
}

export default LoginForm