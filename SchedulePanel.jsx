import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Avatar, Grid, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const SchedulePanel = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        October 2025
      </Typography>

     <Box sx={{ mb: 3 }}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
      <Box
        key={i}
        sx={{
          flex: '1',
          bgcolor: i === 1 ? '#4F46E5' : 'white',
          color: i === 1 ? 'white' : 'black',
          textAlign: 'center',
          borderRadius: 2,
          padding: '8px 0',
          mx: 0.5,
          boxShadow: i === 1 ? 2 : 0,
          fontSize: 14,
        }}
      >
        <Typography>{day}</Typography>
        <Typography variant="caption">{25 + i}</Typography>
      </Box>
    ))}
  </Box>
</Box>


      <Box>
        <Typography fontWeight="bold" mb={1}>The Upcoming Schedule</Typography>

        <Card sx={{ mb: 2, background: '#EEF2FF' }}>
          <CardContent>
            <Typography variant="body2" fontWeight="bold">
              Dentist
            </Typography>
            <Typography variant="caption" color="text.secondary">
              09:00 - 11:00 • Dr. Cameron Williamson
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, background: '#E0F7FA' }}>
          <CardContent>
            <Typography variant="body2" fontWeight="bold">
              Physiotherapy Appointment
            </Typography>
            <Typography variant="caption" color="text.secondary">
              11:00 - 12:00 • Dr. Kevin Djones
            </Typography>
          </CardContent>
        </Card>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          On Thursday
        </Typography>

        <Grid container spacing={1} mb={2}>
          <Grid item xs={6}>
            <Chip label="Health checkup" variant="filled" sx={{ width: '100%', bgcolor: '#F3E8FF' }} />
          </Grid>
          <Grid item xs={6}>
            <Chip label="Ophthalmologist" variant="filled" sx={{ width: '100%', bgcolor: '#E1F5FE' }} />
          </Grid>
        </Grid>

        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          On Saturday
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Chip label="Cardiologist" icon={<Avatar sx={{ width: 20, height: 20 }}>❤️</Avatar>} sx={{ width: '100%', bgcolor: '#FFF3E0' }} />
          </Grid>
          <Grid item xs={6}>
            <Chip label="Neurologist" icon={<Avatar sx={{ width: 20, height: 20 }}>🧠</Avatar>} sx={{ width: '100%', bgcolor: '#E3F2FD' }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SchedulePanel;
