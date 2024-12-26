'use client'
import { Place, PhoneInTalk, MailOutlineOutlined } from "@mui/icons-material";
import { Button, Box, TextField, Typography, Grid } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface IFormInput {
  username: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // handle form submission
  };

  const onError = (err: FieldValues) => {
    console.log(err); // handle form submission
  };

  return (
    <div className="py-32">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 4, sm: 4 } }}
      >
        {/* Left Column - Contact Info */}
        <Grid item xs={12} md={4}>
          {/* Office Details */}
          <div className="flex flex-col items-start justify-evenly rounded-3xl p-10 space-y-8 bg-slate-200">
            <Place sx={{ color: "#3B82F6", fontSize: 30 }} />
            <div className="font-bold">
              <div>
                <div className="text-blue-500">Office 1:</div>
                <p>
                  6740, Jabl at Toor, Mishrifah Dist, 23331 Jeddah, Saudi
                  Arabia.
                </p>
              </div>
              <div>
                <div className="text-blue-500 mt-7">Contact:</div>
                <p>+966 53 717 7486</p>
              </div>

              <div>
                <div className="text-blue-500 mt-7">Office 2:</div>
                <p>1st Floor, 59-B, Johar Town, Lahore, Punjab, Pakistan.</p>
              </div>
              <div>
                <div className="text-blue-500 mt-7">Contact:</div>
                <p>+92 321 114 7670</p>
              </div>
            </div>
          </div>

          {/* Phone and Email */}
          <div className="mt-8 flex flex-col items-start justify-start space-y-4 rounded-3xl p-10 bg-slate-200">
            <div className="flex items-center space-x-4">
              <PhoneInTalk sx={{ color: "#3B82F6", fontSize: 30 }} />
              <div className="font-bold">
                <div className="text-blue-500">Call Us</div>
                <p>+966 53 717 7486</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MailOutlineOutlined sx={{ color: "#3B82F6", fontSize: 30 }} />
              <div className="font-bold">
                <div className="text-blue-500">Mail A quote</div>
                {/* Email Text */}
                <p className="break-all w-full sm:w-[300px] overflow-hidden whitespace-pre-wrap">
                  {/* Added break-all and full width */}info@dexterzsol.com
                </p>
              </div>
            </div>
          </div>
        </Grid>

        {/* Right Column - Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit, onError)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              p: 4,
              height: "auto", // Adjust height for smaller screens
              width: "100%",
              borderRadius: 3,
              boxShadow: 10,

              background: "linear-gradient(145deg, #bfdbfe, #93c5fd)", // Lighter blue gradient
              transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ color: "#000000" }}
            >
              Registration Form
            </Typography>

            {/* Name Field */}
            <TextField
              label="Your Name*"
              variant="outlined"
              sx={{
                background: "opacity-0",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  background: "white", // Make the background white inside the text field
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px", // Rounded corners for text field
                  border: errors.username ? "1px solid red" : "none", // Red border on error
                },
              }}
              fullWidth
              {...register("username", { required: "Name is required" })}
              error={Boolean(errors.username)}
              helperText={(errors.username?.message as string) || ""}
            />

            {/* Email Field */}
            <TextField
              label="Your Email*"
              type="email"
              variant="outlined"
              sx={{
                background: "opacity-0",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  background: "white",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  border: errors.email ? "1px solid red" : "none", // Red border on error
                },
              }}
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={Boolean(errors.email)}
              helperText={(errors.email?.message as string) || ""}
            />

            {/* Phone Number Field */}
            <TextField
              label="Your Number*"
              type="string"
              variant="outlined"
              sx={{
                background: "opacity-0",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  background: "white",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  border: errors.phoneNumber ? "1px solid red" : "none", // Red border on error
                },
              }}
              fullWidth
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              error={Boolean(errors.phoneNumber)}
              helperText={(errors.phoneNumber?.message as string) || ""}
            />

            {/* Subject Field */}
            <TextField
              label="Subject*"
              type="string"
              variant="outlined"
              sx={{
                background: "opacity-0",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  background: "white",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  border: errors.subject ? "1px solid red" : "none", // Red border on error
                },
              }}
              fullWidth
              {...register("subject", { required: "Subject is required" })}
              error={Boolean(errors.subject)}
              helperText={(errors.subject?.message as string) || ""}
            />

            {/* Message Text Area */}
            <TextField
              label="Message*"
              variant="outlined"
              sx={{
                background: "opacity-0",
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  background: "white",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  border: errors.message ? "1px solid red" : "none", // Red border on error
                },
              }}
              fullWidth
              multiline
              rows={4} // Adjust the height as necessary
              {...register("message", { required: "Message is required" })}
              error={Boolean(errors.message)}
              helperText={(errors.message?.message as string) || ""}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#3B82F6",
                "&:hover": {
                  backgroundColor: "#2563EB", // Button hover color
                },
                borderRadius: "12px",
                transition: "0.3s ease-in-out",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactPage;
