import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

export default function StarRating({ onRatingChange }) {
  const [value, setValue] = useState(0);
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onRatingChange(newValue);
        }}
      />
    </Box>
  );
}
