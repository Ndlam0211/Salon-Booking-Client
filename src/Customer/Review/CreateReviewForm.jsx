import { Box, Button, InputLabel, Rating, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReview } from "../../Redux/Review/action";

const CreateReviewForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
  const formik = useFormik({
    initialValues: {
      reviewContent: "",
      rating: 0,
    },
    onSubmit: (values) => {
      console.log("Submitting create review: ", values);
      dispatch(
        createReview({
          salonId: id,
          reviewData: values,
          jwt: localStorage.getItem("jwt"),
        }),
      );
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
        id="reviewContent"
        name="reviewContent"
        label="Review"
        variant="outlined"
        multiline
        rows={4}
        value={formik.values.reviewContent}
        onChange={formik.handleChange}
      />
      <div className="space-y-2">
        <InputLabel>Rating</InputLabel>
        <Rating
          id="rating"
          name="rating"
          onChange={(event, newValue) => formik.setFieldValue("rating", newValue)}
          value={formik.values.rating}
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
