import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import OwnerDetailsForm from "./OwnerDetailsForm";
import { useFormik } from "formik";
import SalonDetailsForm from "./SalonDetailsForm";

const steps = ["Owner Details", "Salon Details", "Salon Address"];
const SellerAccountForm = () => {
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
        pincode: "",
        address: "",
        city: "",
        state: "",
        email: ""
      },
      salonDetails: {
        name:"",
        openTime: "",
        closeTime: "",
        images: []
      }
    },
    onSubmit: (values) => {
      console.log("submit: ", values);
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
            "create"
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
          <Button onClick={handleActiveStep(1)} variant="contained">
            {activeStep === 2 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerAccountForm;
