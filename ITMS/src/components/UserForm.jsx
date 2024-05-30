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

const UserForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .trim()
          .required("Name is Required")
          .max(55, "Name must be at Max 55 Character"),
        email: Yup.string().email().trim().required(),
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
            }}
          >
            <Typography variant="h5">New User</Typography>
            {/* Name */}
            <FormControl colour="secondary">
              <TextField
                label="Name"
                {...formik.getFieldProps("name")}
              ></TextField>
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              ) : null}
            </FormControl>

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

            <Button type="submit">Submit</Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default UserForm;
