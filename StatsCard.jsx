import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const StatsCard = ({ title, value, icon }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2, 
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          {value}
        </Typography>
      </Box>

      {icon && (
        <Box
          sx={{
            bgcolor: '#EEF2FF',
            borderRadius: '50%',
            height:50,
            padding: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 50, 
          }}
        >
          {icon}
        </Box>
      )}
    </Paper>
  );
};

export default StatsCard;
