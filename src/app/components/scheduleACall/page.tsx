'use client'
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ScheduleCall = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="bg-blue-500 my-10 p-10 rounded-lg text-center text-white relative">
      <h2 className="mb-6 text-2xl font-bold">Schedule a Call</h2>
      <form className="flex flex-wrap gap-4 justify-center" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Your Name"
          InputLabelProps={{
            style: { color: "white", fontSize: "14px" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px", // Fully rounded border
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Your Phone"
          InputLabelProps={{
            style: { color: "white", fontSize: "14px" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px", // Fully rounded border
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Message"
          InputLabelProps={{
            style: { color: "white", fontSize: "14px" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px", // Fully rounded border
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#2563eb", // Blue text
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "25px",
            textTransform: "none",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#f0f0f0", // Lighter gray on hover
            },
            "&:active": {
              backgroundColor: "#e0e0e0", // Gray on click
              transform: "scale(0.95)", // Slight shrink effect
            },
          }}
        >
          SUBMIT REQUEST
        </Button>
      </form>
    </div>
  );
};

export default ScheduleCall;
