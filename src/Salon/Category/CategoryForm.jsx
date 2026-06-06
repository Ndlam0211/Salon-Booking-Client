import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { AddPhotoAlternate, Close } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { createCategory } from "../../Redux/Category/action";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log("submit: ", formik.values);
      dispatch(
        createCategory({
          categoryData: values,
          jwt: localStorage.getItem("jwt"),
        },
      ),
      );
    },
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("image", image);
    setUploadImage(false);
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 w-full lg:w-1/2"
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} className="w-24 h-24">
            {formik.values.image ? (
              <div className="relative border">
                <img
                  className="w-24 h-24 object-cover"
                  src={formik.values.image}
                  alt="Category"
                />
                <IconButton
                  className=""
                  color="error"
                  size="small"
                  sx={{ position: "absolute", top: 0, right: 0 }}
                >
                  <Close sx={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="fileInput" className="relative">
                  <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                    <AddPhotoAlternate className="text-gray-700" />
                  </span>
                  {uploadImage && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )}
                </label>
              </>
            )}
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Category Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ py: ".8rem" }}
            >
              Create Category
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CategoryForm;
