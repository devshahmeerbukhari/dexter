// Import necessary modules
import React from "react";
import TextField from "@mui/material/TextField";

const ScheduleCall = () => {
  return (
    <div className="bg-blue-500 my-10 p-8 rounded-lg text-center text-white relative">
      <h2 className="mb-6 text-2xl font-bold">Schedule a Call</h2>
      <form className="flex flex-wrap gap-4 justify-center">
        <TextField
          variant="outlined"
          label="Your Name"
          className="text-white rounded-lg w-52"
          InputLabelProps={{
            style: { color: "white", fontSize: "14px" }, // Smaller placeholder font size
          }}
          InputProps={{
            style: {
              borderRadius: "25px",
              color: "white",
              borderColor: "white",
            },
            classes: {
              notchedOutline: "border-white",
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Your Phone"
          className="text-white rounded-lg w-52"
          InputLabelProps={{
            style: { color: "white", fontSize: "14px" }, // Smaller placeholder font size
          }}
          InputProps={{
            style: {
              borderRadius: "25px",
              color: "white",
              borderColor: "white",
            },
            classes: {
              notchedOutline: "border-white",
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Message"
          className="text-white rounded-lg w-52"
          InputLabelProps={{
            style: { color: "white", fontSize: "14px" }, // Smaller placeholder font size
          }}
          InputProps={{
            style: {
              borderRadius: "25px",
              color: "white",
              borderColor: "white",
            },
            classes: {
              notchedOutline: "border-white",
            },
          }}
        />
        <button
          className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full"
          style={{
            textTransform: "none",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = "#e0e0e0"; // Light gray background on click
            e.currentTarget.style.transform = "scale(0.95)"; // Slight shrink effect
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff"; // Restore original background color
            e.currentTarget.style.transform = "scale(1)"; // Restore original size
          }}
        >
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
};

export default ScheduleCall;
