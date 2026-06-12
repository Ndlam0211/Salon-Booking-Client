import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { AddPhotoAlternate, Close } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { createService } from "../../Redux/Salon Services/action";
import { getCategoriesBySalon } from "../../Redux/Category/action";

const CreateServiceForm = () => {
  const dispatch = useDispatch();
  const [uploadImage, setUploadImage] = useState(false);
  const { category, salon } = useSelector((store) => store);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      duration: "",
      image: "",
      categoryId: "",
    },
    onSubmit: (values) => {
      console.log("submit: ", formik.values);
      dispatch(
        createService({
          serviceData: values,
          jwt: localStorage.getItem("jwt"),
        }),
      );
    },
  });

  useEffect(() => {
    if (salon.salon) {
      dispatch(
        getCategoriesBySalon({
          jwt: localStorage.getItem("jwt"),
          salonId: salon.salon?.id,
        }),
      );
    }
  }, [salon.salon]);

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
              label="Service Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="price"
              name="price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="duration"
              name="duration"
              label="Duration (minutes)"
              value={formik.values.duration}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="categoryId"
                label="Category"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
              >
                {category.categories.map((item, index) => (
                  <MenuItem value={item.id} key={index}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ py: ".8rem" }}
            >
              Create Service
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateServiceForm;
