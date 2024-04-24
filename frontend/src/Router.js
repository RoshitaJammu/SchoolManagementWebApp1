import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import ImgMediaCard from './ImgMediaCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AppRouter = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAdminClick = () => {
    navigate('/home'); // Navigate to Home.js when Admin button is clicked
  };

  return (
    <div>



      <Box position="fixed" top={0} left={0} width="100%" height="100%" zIndex={-1}>
        <img 
          src="https://img.freepik.com/free-photo/top-view-paper-person-frame_23-2149001149.jpg?t=st=1713864335~exp=1713867935~hmac=b6ba04839be10b6ca6e6ee01ead0b124a1c37dd10e844b29b27d6eaa45748df9&w=740" 
          alt="School Management" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box display="flex" flexDirection="column" alignItems="center" width="80%">
          <Box mb={2}>
            <Button variant="contained" color="secondary" onClick={handleAdminClick}>
              Admin
            </Button>
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%">
            <ImgMediaCard 
              title="Teacher View" 
              description="In Teacher view, you can access academic information, syllabus, and details about the staff."
              image="https://img.freepik.com/free-vector/teacher-concept-professor-giving-lesson-classroom-school-college-workers-idea-education-knowledge-isolated-flat-vector-illustration_613284-1754.jpg?t=st=1713882801~exp=1713886401~hmac=1fc654942fcbf01fe93d4277d8fab6bfd1a45d02f8131b677c3be562ad652d9c&w=740"
              buttonName="View as Teacher"
            />
            <Box ml={2}>
              <ImgMediaCard 
                title="Student View" 
                description="In this view, you can view the syllabus and grading system for students."
                image="https://img.freepik.com/free-photo/medium-shot-little-girl-with-tasty-food_23-2151061836.jpg?t=st=1713883316~exp=1713886916~hmac=e1bfa008e3be934088ddab1c42185e4c8ef8b05de026a274c26235bca2afa4b5&w=740"
                buttonName="View as Student" 
              />
            </Box>
            <Box ml={2}>
              <ImgMediaCard 
                title="Parent View" 
                description="In the Parent view, you can access information about the school's organization and activities."
                image="https://img.freepik.com/premium-vector/boy-mother-sitting-with-laptop_38747-635.jpg?w=740"
                buttonName="View as Parent"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AppRouter;