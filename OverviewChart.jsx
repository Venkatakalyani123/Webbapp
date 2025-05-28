import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', appointments: 10 },
  { name: 'Tue', appointments: 14 },
  { name: 'Wed', appointments: 9 },
  { name: 'Thu', appointments: 17 },
  { name: 'Fri', appointments: 12 },
  { name: 'Sat', appointments: 20 },
  { name: 'Sun', appointments: 15 },
];

const OverviewChart = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" gutterBottom>
        Overview
      </Typography>

      <Box sx={{ height: 300, bgcolor: 'white', borderRadius: 2, p: 2, boxShadow: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="appointments" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default OverviewChart;
