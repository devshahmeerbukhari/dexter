"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ScheduleACall = () => {
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: formValues.firstName === "",
      lastName: formValues.lastName === "",
      email:
        formValues.email === "" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email),
      message: formValues.message === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      console.log("Form submitted!", formValues);
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        minHeight: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            marginBottom={2}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            marginBottom={4}
            sx={{ color: "#555" }}
          >
            Looking to transform your business with innovative IT solutions? We
            provide a wide range of services, including software development, IT
            consulting, cloud solutions, and more. Schedule a call with our
            experts to discuss how we can help bring your ideas to life or
            optimize your current systems.
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: "500px",
              boxShadow: 0,
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  helperText={errors.firstName && "First Name is required"}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  helperText={errors.lastName && "Last Name is required"}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email && "A valid email is required"}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formValues.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message && "Message is required"}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    marginTop: "16px",
                    padding: "12px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScheduleACall;
