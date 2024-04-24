import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Welcome to Home Page</h2>

      {/* Navbar with links to other components */}
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/academics" style={{ margin: '10px' }}>
          Academics
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/grading" style={{ margin: '10px' }}>
          Grading
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/staff" style={{ margin: '10px' }}>
          Staff
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/fees" style={{ margin: '10px' }}>
          Fees
        </Button>
      </Box>

      {/* Back Button */}
      <Box mt={4}>
        <Button variant="contained" color="secondary" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
