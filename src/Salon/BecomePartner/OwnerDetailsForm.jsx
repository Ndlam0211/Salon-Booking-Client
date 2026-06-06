import { Container, TextField, Typography } from '@mui/material';
import React from 'react'

const OwnerDetailsForm = ({formik}) => {

  return (
    <Container component={"main"}>
      <div className="space-y-5">
        <Typography className="text-center" variant="h5">
          Owner Details
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
        </form>
      </div>
    </Container>
  );
}

export default OwnerDetailsForm