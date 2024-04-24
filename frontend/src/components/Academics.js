import React, { useState } from 'react';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText, IconButton, Container, Paper, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Academics = () => {
  const [courses, setCourses] = useState(['IIT', 'CBSC', 'SSC']);
  const [courseInput, setCourseInput] = useState('');

  const addCourse = () => {
    if (courseInput.trim()) {
      setCourses([...courses, courseInput]);
      setCourseInput('');
    }
  };

  const deleteCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h4" gutterBottom color="primary">Academics</Typography>
        <Divider sx={{ mb: 4 }} />
        <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h5" gutterBottom color="secondary">School Information</Typography>
          <Typography variant="body1" align="justify">
            <span style={{ color: '#666' }}>
              Our school offers a wide range of academic programs, catering to various interests and career paths.
            </span>
          </Typography>
        </Paper>
        <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h6" gutterBottom color="secondary">Classes Offered</Typography>
          <Typography variant="body1" style={{ color: '#666' }}>
            We offer classes from 1st to 12th grade.
          </Typography>
        </Paper>
        <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h6" gutterBottom color="secondary">Courses Available</Typography>
          <List>
            {courses.map((course, index) => (
              <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0', '&:last-child': { borderBottom: 'none' } }} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteCourse(index)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText primary={<span style={{ color: '#333' }}>{course}</span>} />
              </ListItem>
            ))}
          </List>
          <Box mt={3} display="flex" alignItems="center" justifyContent="center">
            <TextField
              label="Add Course"
              variant="outlined"
              value={courseInput}
              onChange={(e) => setCourseInput(e.target.value)}
              fullWidth
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="primary" onClick={addCourse}>
              Add Course
            </Button>
          </Box>
        </Paper>
        {/* Back and Home Buttons */}
        <Box mt={4} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Button component={Link} to="/" variant="contained" color="secondary" sx={{ mb: 2 }}>
            Back
          </Button>
          <Button component={Link} to="/home" variant="contained" color="primary">
            Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Academics;
