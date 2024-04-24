import React from 'react';
import Syllabus from './Syllabus';
import TimeTable from './TimeTable';
import { Typography, Container,Box,Button } from '@mui/material';

const StudentDetailView = ({ student }) => {
  

  return (
    <Container>
      <Box bgcolor="primary.main" color="white" p={2} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Syllabus
        </Typography>
        <Syllabus />
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Timetable
        </Typography>
        <TimeTable />
      </Box>
      <Box mt={4} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="secondary">
          Back
        </Button>
      </Box>
      

    </Container>
  );
};

export default StudentDetailView;
