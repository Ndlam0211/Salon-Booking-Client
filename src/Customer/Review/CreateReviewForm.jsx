import { Box, Button, InputLabel, Rating, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const CreateReviewForm = () => {
  const formik = useFormik({
    initialValues: {
      reviewText: "",
      reviewRating: 0,
    },
    onSubmit: (values) => {
      console.log("Submitting", values);
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3 }}
      className="space-y-5 w-full lg:w-1/2"
    >
      <TextField
        fullWidth
        id="reviewText"
        name="reviewText"
        label="Review"
        variant="outlined"
        multiline
        rows={4}
        value={formik.values.reviewText}
        onChange={formik.handleChange}
      />
      <div className="space-y-2">
        <InputLabel>Rating</InputLabel>
        <Rating
          id="reviewRating"
          name="reviewRating"
          onChange={(event, newValue) => formik.setFieldValue("reviewRating", newValue)}
          value={formik.values.reviewRating}
          precision={0.5}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit Review
      </Button>
    </Box>
  );
};

export default CreateReviewForm;
