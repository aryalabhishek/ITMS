import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .trim()
          .required("Name is Required")
          .max(55, "Name must be at Max 55 Character"),
        email: Yup.string()
          .email("Must be Valid email")
          .trim()
          .required("Email is Required"),
        password: Yup.string().trim().required("Password is Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
              padding: "2rem",
              minWidth: "300px",
            }}
          >
            <Typography variant="h5">Sign in</Typography>

            {/*Email  */}
            <FormControl colour="secondary">
              <TextField
                label="Email"
                {...formik.getFieldProps("email")}
              ></TextField>
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            {/* Password*/}
            <FormControl colour="secondary">
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              ></TextField>
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            <Button type="submit" variant="contained">
              Login
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
