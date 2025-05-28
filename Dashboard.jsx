import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import OverviewChart from '../components/OverviewChart';
import PatientTable from '../components/PatientTable';
import SchedulePanel from '../components/SchedulePanel'; 
import { CalendarMonth, GroupAdd, AttachMoney } from '@mui/icons-material';


const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', padding: 2, overflow: 'auto' }}>
        {/* Main Content */}
        <Box sx={{ flex: 2, pr: 2 }}>
          <Header />

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <StatsCard
                title="Appointments"
                value="56"
                icon={<CalendarMonth sx={{ fontSize: 30, color: '#4F46E5' }} />}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatsCard
                title="New Patients"
                value="34"
                icon={<GroupAdd sx={{ fontSize: 30, color: '#10B981' }} />}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatsCard
                title="Revenue"
                value="$4,560"
                icon={<AttachMoney sx={{ fontSize: 30, color: '#F59E0B' }} />}
              />
            </Grid>
          </Grid>


          <OverviewChart />
          <PatientTable />
        </Box>

        {/* Right Side Schedule Panel */}
        <Box sx={{ flex: 1, bgcolor: '#f4f6fa', borderRadius: 2, padding: 2 }}>
          <SchedulePanel />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
