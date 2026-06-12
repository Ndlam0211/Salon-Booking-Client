import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import OwnerDetailsForm from "./OwnerDetailsForm";
import { useFormik } from "formik";
import SalonDetailsForm from "./SalonDetailsForm";
import SalonAddressForm from "./SalonAddressForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSalon } from "../../Redux/Salon/action";

const getLocalTime = (time) => {
  let hour = time?.$H;
  let minute = time?.$m;
  let second = time?.$s;

  const localTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  return localTime;
};

const steps = ["Owner Details", "Salon Details", "Salon Address"];

const SellerAccountForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleActiveStep = (value) => () => {
    setActiveStep(activeStep + value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      salonAddress: {
        phoneNumber: "",
        address: "",
        city: "",
        email: "",
      },
      salonDetails: {
        name: "",
        openingTime: "",
        closingTime: "",
        images: [],
      },
    },
    onSubmit: (values) => {
      console.log("submit: ", values);
      const openTime = getLocalTime(values.salonDetails.openingTime);
      const closeTime = getLocalTime(values.salonDetails.closingTime);

      const ownerDetails = {
        username: values.username,
        email: values.email,
        password: values.password,
        role: "SALON_OWNER",
      };

      const salonDetails = {
        ...values.salonDetails,
        openTime,
        closeTime,
        ...values.salonAddress
      }

      dispatch(createSalon({salonDetails, ownerDetails, navigate}))
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((item) => (
          <Step key={item}>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-20 space-y-10">
        <div className="">
          {activeStep === 0 ? (
            <OwnerDetailsForm formik={formik} />
          ) : activeStep === 1 ? (
            <SalonDetailsForm formik={formik} />
          ) : (
            <SalonAddressForm formik={formik} />
          )}
        </div>
        <div className="flex items-center justify-between ">
          <Button
            disabled={activeStep < 1}
            onClick={handleActiveStep(-1)}
            variant="contained"
          >
            Back
          </Button>
          <Button
            onClick={
              activeStep === 2 ? formik.handleSubmit : handleActiveStep(1)
            }
            variant="contained"
          >
            {activeStep === 2 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerAccountForm;
