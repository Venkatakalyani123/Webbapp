import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from '@mui/material';

const PatientTable = () => {
  const patients = [
    { name: 'John Doe', age: 45, condition: 'Diabetes' },
    { name: 'Jane Smith', age: 37, condition: 'Asthma' },
    { name: 'Michael Johnson', age: 52, condition: 'Hypertension' },
    { name: 'Emily Davis', age: 29, condition: 'Anxiety' },
  ];

 
  const getConditionColor = (condition) => {
    switch (condition.toLowerCase()) {
      case 'diabetes':
      case 'hypertension':
        return 'red';
      case 'asthma':
      case 'anxiety':
        return 'green';
      default:
        return 'black';
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Recent Patients
      </Typography>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f4f6fa' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Condition</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patients.map((patient, index) => (
              <TableRow
                key={index}
                hover
                sx={{
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    bgcolor: '#f0f4ff',
                  },
                }}
              >
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell sx={{ color: getConditionColor(patient.condition), fontWeight: 'bold' }}>
                  {patient.condition}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PatientTable;
