import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';
import './Staff.css'; // Import the CSS file for styling

const Staff = () => {
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Developer' },
    { id: 3, name: 'Alice Johnson', position: 'Designer' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPosition, setNewPosition] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const addStaffMember = () => {
    if (newName && newPosition) {
      const newId = staffList.length ? staffList[staffList.length - 1].id + 1 : 1;
      setStaffList([...staffList, { id: newId, name: newName, position: newPosition }]);
      setNewName('');
      setNewPosition('');
    }
  };

  const deleteStaffMember = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  const editStaffMember = (id) => {
    const staffMemberToEdit = staffList.find((staff) => staff.id === id);
    if (staffMemberToEdit) {
      setNewName(staffMemberToEdit.name);
      setNewPosition(staffMemberToEdit.position);
      setEditItemId(id);
    }
  };

  const updateStaffMember = () => {
    setStaffList(
      staffList.map((staff) =>
        staff.id === editItemId ? { ...staff, name: newName, position: newPosition } : staff
      )
    );
    setNewName('');
    setNewPosition('');
    setEditItemId(null);
  };

  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Arial', color: '#3f51b5' }}>Staff Page</Typography>
        <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#f0f0f0" p={3} borderRadius={10}>
          <Typography variant="h5" gutterBottom style={{ fontFamily: 'Arial', color: '#f50057' }}>Add/Edit Staff Member</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <TextField
              type="text"
              label="Name"
              variant="outlined"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{ marginRight: '10px', width: '200px' }}
            />
            <TextField
              type="text"
              label="Position"
              variant="outlined"
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
              style={{ marginRight: '10px', width: '200px' }}
            />
            {editItemId ? (
              <Button variant="contained" color="primary" onClick={updateStaffMember} style={{ backgroundColor: '#4caf50', fontFamily: 'Arial', marginRight: '10px' }}>
                Update
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={addStaffMember} style={{ backgroundColor: '#2196f3', fontFamily: 'Arial', marginRight: '10px' }}>
                Add
              </Button>
            )}
          </Box>
          <Typography variant="h5" gutterBottom style={{ fontFamily: 'Arial', color: '#f50057' }}>Staff List</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffList.map((staff) => (
                  <TableRow key={staff.id}>
                    <TableCell>{staff.id}</TableCell>
                    <TableCell>{staff.name}</TableCell>
                    <TableCell>{staff.position}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="primary" onClick={() => editStaffMember(staff.id)} style={{ backgroundColor: '#2196f3', color: '#fff', fontFamily: 'Arial', marginRight: '10px' }}>
                        Edit
                      </Button>
                      <Button variant="outlined" color="secondary" onClick={() => deleteStaffMember(staff.id)} style={{ backgroundColor: '#f44336', color: '#fff', fontFamily: 'Arial' }}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Additional Buttons */}
          <Box mt={4} display="flex" justifyContent="space-between" width="50%">
            <Button variant="contained" color="secondary" style={{ fontFamily: 'Arial' }}>
              Back
            </Button>
            <Button variant="contained" color="primary" style={{ fontFamily: 'Arial' }}>
              Home
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Staff;
