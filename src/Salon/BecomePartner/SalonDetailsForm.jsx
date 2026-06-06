import React, { useState } from "react";
import {
  CircularProgress,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { DateTimePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SalonDetailsForm = ({ formik }) => {
  const [uploadImage, setUploadImage] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("salonDetails.images", [
      ...formik.values.salonDetails.images,
      image,
    ]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => () => {
    const updatedImages = [...formik.values.salonDetails.images];
    updatedImages.slice(index, 1);
    formik.setFieldValue("salonDetails.images", updatedImages);
  };

  return (
    <Container component={"main"}>
      <div className="space-y-5">
        <Typography className="text-center" variant="h5">
          Salon Details
        </Typography>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div className="">
            {formik.values.salonDetails.images.length > 0 ? (
              formik.values.salonDetails.images.map((image, index) => (
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
                    onClick={handleRemoveImage(index)}
                    sx={{ position: "absolute", top: 0, right: 0 }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))
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
          </div>

          <TextField
            variant="outlined"
            fullWidth
            name="salonDetails.name"
            id="Salon Name"
            label="Salon Name"
            required
            value={formik.values.salonDetails.name}
            onChange={formik.handleChange}
          />

          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <TimePicker
              sx={{ with: "100%" }}
              fullWidth
              label="Select Open Time"
              onChange={(value) => {
                if (value) {
                  formik.setFieldValue(
                    "formik.salonDetails.openTime",
                    value,
                  );
                }
              }}
            />
          </LocalizationProvider>

          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <TimePicker
              sx={{ with: "100%" }}
              fullWidth
              label="Select Close Time"
              onChange={(value) => {
                if (value) {
                  formik.setFieldValue(
                    "formik.salonDetails.closeTime",
                    value,
                  );
                }
              }}
            />
          </LocalizationProvider>
        </form>
      </div>
    </Container>
  );
};

export default SalonDetailsForm;
