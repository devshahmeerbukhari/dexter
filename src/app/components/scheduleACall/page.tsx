// Import necessary modules
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ScheduleCall = () => {
  return (
    <div className="bg-blue-500 my-10 p-8 rounded-lg text-center text-white relative">
      <h2 className="mb-6 text-2xl font-bold">Schedule a Call</h2>
      <form className="flex flex-wrap gap-4 justify-center">
        <TextField
          variant="outlined"
          label="Your Name"
          className="text-white rounded-lg w-52"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { borderRadius: '25px', color: 'white', borderColor: 'white' },
            classes: {
              notchedOutline: 'border-white',
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Your Phone"
          className="text-white rounded-lg w-52"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { borderRadius: '25px', color: 'white', borderColor: 'white' },
            classes: {
              notchedOutline: 'border-white',
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Message"
          className="text-white rounded-lg w-52"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { borderRadius: '25px', color: 'white', borderColor: 'white' },
            classes: {
              notchedOutline: 'border-white',
            },
          }}
        />
        <Button
          variant="contained"
          className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full"
          style={{ textTransform: 'none' }}
        >
          SUBMIT REQUEST
        </Button>
      </form>
    </div>
  );
};

export default ScheduleCall;
